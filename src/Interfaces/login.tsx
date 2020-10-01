export interface Login {
  isAuthed: boolean;
  token: string;
  user:
    | {
        name: string;
      }
    | undefined;
}
