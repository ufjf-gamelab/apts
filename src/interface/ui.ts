export const pageActions = {
  Add: "add",
  Edit: "edit",
  List: "list",
  View: "view",
} as const;

export type PageAction = (typeof pageActions)[keyof typeof pageActions];
