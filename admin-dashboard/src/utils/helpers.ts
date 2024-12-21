/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/hooks/use-toast";

export const errorToast = (error: any) => {
  const errMessage = error?.message || error?.cause?.result?.errors[0]?.message;
  toast({
    variant: "destructive",
    title: errMessage,
  });
};

export const errorWrapper = async (fn: () => Promise<any>) => {
  try {
    return await fn();
  } catch (error: any) {
    const errMessage =
      error?.cause?.result?.errors[0]?.message || error?.message;

    toast({
      variant: "destructive",
      title: errMessage,
    });
  }
};
