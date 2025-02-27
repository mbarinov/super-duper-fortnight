import { z } from "zod";

export const userProfileSchema = z.object({
  fullName: z.string().min(2).trim().nonempty(),
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/)
    .trim()
    .nonempty(),
  email: z.string().nonempty().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .nonempty(),
  dateOfBirth: z.string().nonempty(),
  presentAddress: z.string().trim().nonempty(),
  permanentAddress: z.string().trim().nonempty(),
  city: z.string().trim().nonempty(),
  postalCode: z.string().trim().nonempty(),
  country: z.string().trim().nonempty(),
  profilePhoto: z.string().optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

const mockUserProfile: UserProfile = {
  fullName: "John Doe",
  username: "johndoe",
  email: "john.doe@example.com",
  password: "Password123",
  dateOfBirth: "1990-01-01",
  presentAddress: "123 Main St, Apt 4B",
  permanentAddress: "123 Main St, Apt 4B",
  city: "New York",
  postalCode: "10001",
  country: "United States",
  profilePhoto: "",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchUserProfile(): Promise<UserProfile> {
  await delay(500);

  return mockUserProfile;
}

export async function updateUserProfile(
  data: UserProfile
): Promise<UserProfile> {
  userProfileSchema.parse(data);

  await delay(300);

  // Update the mock profile
  Object.assign(mockUserProfile, data);

  return data;
}

export async function uploadProfilePhoto(
  file: File
): Promise<{ profilePhoto: string }> {
  await delay(800);

  // Create a mock URL for the uploaded photo
  // In a real implementation, this would be a URL from a CDN or storage service
  const mockPhotoUrl = URL.createObjectURL(file);

  // Update the mock user profile
  mockUserProfile.profilePhoto = mockPhotoUrl;

  return { profilePhoto: mockPhotoUrl };
}
