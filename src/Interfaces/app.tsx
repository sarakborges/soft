export interface App {
  isAuthed: boolean;
  token: string;
  user:
    | {
        name: string;
      }
    | undefined;
}
