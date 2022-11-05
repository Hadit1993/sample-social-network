export default interface UserEntity {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  followers: string[];
  followings: string[];
  profilePicture?: string;
  coverPicture?: string;
  about?: string;
  location?: string;
  company?: string;
  relStatus?: string;
}
