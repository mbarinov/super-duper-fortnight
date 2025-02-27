"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import FormItem from "@/lib/components/form-item";
import Button from "@/lib/components/button";
import dynamic from "next/dynamic";
import {
  useMutation,
  useSuspenseQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchUserProfile,
  updateUserProfile,
  uploadProfilePhoto,
  UserProfile,
} from "@/lib/api/user";
import { Suspense } from "react";
import { PencilIcon } from "@repo/icons";

const nameSchema = z
  .string()
  .min(2, "Must be at least 2 characters")
  .trim()
  .nonempty("This field is required");

const textSchema = z.string().trim().nonempty("This field is required");

const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be less than 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers, and underscores"
  )
  .trim()
  .nonempty("Username is required");

const emailSchema = z
  .string()
  .nonempty("Email is required")
  .email("Invalid email format");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .nonempty("Password is required");

const dateSchema = z
  .string()
  .nonempty("Date of birth is required")
  .refine((val) => {
    try {
      return new Date(val).toString() !== "Invalid Date";
    } catch {
      return false;
    }
  }, "Invalid date format");

const postalCodeSchema = z.string().trim().nonempty("Postal code is required");

const profileSchema = z.object({
  fullName: nameSchema,
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  dateOfBirth: dateSchema,
  presentAddress: textSchema,
  permanentAddress: textSchema,
  city: textSchema,
  postalCode: postalCodeSchema,
  country: textSchema,
  profilePhoto: z.string().optional(),
});

const zodValidator =
  (schema: z.ZodType<string>) =>
  (value: unknown): string | undefined => {
    try {
      schema.parse(value);
      return undefined;
    } catch (error) {
      console.log(error);
      if (error instanceof z.ZodError && error.errors[0]?.message) {
        return error.errors[0].message;
      }
      return "Validation failed";
    }
  };

function ProfileForm() {
  const { data: userProfile } = useSuspenseQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      alert(`Failed to update profile: ${error.message}`);
    },
  });

  const photoMutation = useMutation({
    mutationFn: uploadProfilePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      alert(`Failed to update profile photo: ${error.message}`);
    },
  });

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    photoMutation.mutate(file);
  };

  const form = useForm({
    defaultValues: {
      fullName: userProfile.fullName,
      username: userProfile.username,
      email: userProfile.email,
      password: userProfile.password,
      dateOfBirth: userProfile.dateOfBirth,
      presentAddress: userProfile.presentAddress,
      permanentAddress: userProfile.permanentAddress,
      city: userProfile.city,
      postalCode: userProfile.postalCode,
      country: userProfile.country,
      profilePhoto: userProfile.profilePhoto || "",
    },
    onSubmit: async ({ value }) => {
      try {
        const parseResult = profileSchema.safeParse(value);
        if (!parseResult.success) {
          console.error("Validation errors:", parseResult.error);
          return;
        }

        mutation.mutate(value as UserProfile);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <div className="mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row md:gap-14 gap-6 pt-6">
          {/* user profile photo */}
          <div className="relative">
            <div
              className="relative h-[100px] w-[100px] bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() =>
                document.getElementById("profile-photo-input")?.click()
              }
            >
              {userProfile.profilePhoto ? (
                <img
                  src={userProfile.profilePhoto}
                  alt={`${userProfile.fullName}'s profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">Photo</span>
              )}
            </div>
            <input
              id="profile-photo-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
            <PencilIcon
              className="p-0 absolute text-white bg-black rounded-full p-1 top-[75px] right-[10px]"
              size={24}
            />
          </div>

          <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-6">
            <form.Field
              name="fullName"
              validators={{
                onChange: ({ value }) => zodValidator(nameSchema)(value),
                onBlur: ({ value }) => zodValidator(nameSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Your Name"
                  id="fullName"
                  field={field}
                  placeholder="Enter your full name"
                />
              )}
            </form.Field>

            <form.Field
              name="username"
              validators={{
                onChange: ({ value }) => zodValidator(usernameSchema)(value),
                onBlur: ({ value }) => zodValidator(usernameSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Username"
                  id="username"
                  field={field}
                  placeholder="Choose a username"
                />
              )}
            </form.Field>

            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => zodValidator(emailSchema)(value),
                onBlur: ({ value }) => zodValidator(emailSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Email"
                  id="email"
                  field={field}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            </form.Field>

            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => zodValidator(passwordSchema)(value),
                onBlur: ({ value }) => zodValidator(passwordSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Password"
                  id="password"
                  field={field}
                  type="password"
                  placeholder="Create a password"
                />
              )}
            </form.Field>

            <form.Field
              name="dateOfBirth"
              validators={{
                onChange: ({ value }) => zodValidator(dateSchema)(value),
                onBlur: ({ value }) => zodValidator(dateSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Date of Birth"
                  id="dateOfBirth"
                  field={field}
                  type="date"
                  placeholder="Select your date of birth"
                />
              )}
            </form.Field>

            <form.Field
              name="presentAddress"
              validators={{
                onChange: ({ value }) => zodValidator(textSchema)(value),
                onBlur: ({ value }) => zodValidator(textSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Present Address"
                  id="presentAddress"
                  field={field}
                  placeholder="Enter your current address"
                />
              )}
            </form.Field>

            <form.Field
              name="permanentAddress"
              validators={{
                onChange: ({ value }) => zodValidator(textSchema)(value),
                onBlur: ({ value }) => zodValidator(textSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Permanent Address"
                  id="permanentAddress"
                  field={field}
                  placeholder="Enter your permanent address"
                />
              )}
            </form.Field>

            <form.Field
              name="city"
              validators={{
                onChange: ({ value }) => zodValidator(textSchema)(value),
                onBlur: ({ value }) => zodValidator(textSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="City"
                  id="city"
                  field={field}
                  placeholder="Enter your city"
                />
              )}
            </form.Field>

            <form.Field
              name="postalCode"
              validators={{
                onChange: ({ value }) => zodValidator(postalCodeSchema)(value),
                onBlur: ({ value }) => zodValidator(postalCodeSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Postal Code"
                  id="postalCode"
                  field={field}
                  placeholder="Enter your postal code"
                />
              )}
            </form.Field>

            <form.Field
              name="country"
              validators={{
                onChange: ({ value }) => zodValidator(textSchema)(value),
                onBlur: ({ value }) => zodValidator(textSchema)(value),
              }}
            >
              {(field) => (
                <FormItem
                  label="Country"
                  id="country"
                  field={field}
                  placeholder="Enter your country"
                />
              )}
            </form.Field>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              mutation.isPending,
            ]}
          >
            {([canSubmit, isSubmitting, isMutating]) => {
              const isProcessing = isSubmitting || isMutating;

              return (
                <div className="flex justify-end">
                  <Button
                    className="w-full md:w-[190px]"
                    type="submit"
                    disabled={!canSubmit || isProcessing}
                  >
                    {isProcessing ? "Saving..." : "Save Profile"}
                  </Button>
                </div>
              );
            }}
          </form.Subscribe>
        </div>
      </form>
    </div>
  );
}

function ProfileComponent() {
  return (
    <div className="max-w-4xl mx-auto">
      <Suspense fallback={<ProfileLoadingSkeleton />}>
        <ProfileForm />
      </Suspense>
    </div>
  );
}

function ProfileLoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row md:gap-14 gap-6 pt-6">
        <div className="flex flex-col items-center">
          <div className="h-[100px] w-[100px] bg-gray-200 rounded-full"></div>
          <div className="mt-2 h-4 w-20 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="md:col-span-2 h-6 bg-gray-200 rounded"></div>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <div className="h-10 w-20 bg-gray-200 rounded mr-3"></div>
        <div className="h-10 w-28 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

const Profile = dynamic(() => Promise.resolve(ProfileComponent), {
  ssr: false,
});

export default Profile;
