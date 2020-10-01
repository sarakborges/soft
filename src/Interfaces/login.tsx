export interface Login {
  isAuthed: boolean | undefined;
  token: string;
  user:
    | {
        name: string;
      }
    | undefined;
}
