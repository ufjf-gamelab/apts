export const pageActions = <const> {List: "list", Add:"add", Edit:"edit", View:"view"};
export type PageAction = typeof pageActions[keyof typeof pageActions];
