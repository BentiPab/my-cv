import { format } from "date-fns";

export const formatDate = (date: Date) => format(new Date(date), "dd MMM yyyy");
