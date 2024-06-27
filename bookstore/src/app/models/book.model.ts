export interface Book {
    title: string;
    imageLinks?: {
      thumbnail?: string;
    };
    publisher: string;
    publishedDate: string;
    description: string;
    volumeInfo: string;
  }