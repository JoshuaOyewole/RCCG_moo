export type MainSectionType = {
    iconClassName?: string
  }
  
export type postType = {
    _id: string;
    creator: {
      id: string,
      name: string,
      profilePicture: string
    },
    createdAt: string,
    photos: string[],
    post_description: string,
    time_posted: string,
  }
