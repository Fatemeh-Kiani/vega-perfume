export interface FilterOption {
  id: number;

  name: string;

  slug: string;

  type:
    | "gender"
    | "fragranceFamily"
    | "season";
}