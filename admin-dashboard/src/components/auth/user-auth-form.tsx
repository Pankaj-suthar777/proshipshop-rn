"use client";
import { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/custom/button";
import { PasswordInput } from "@/components/custom/password-input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../graphql/mutations/user.mutations";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { errorToast, errorWrapper } from "@/utils/helpers";
import { useSession } from "next-auth/react";
type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, {
      message: "Please enter your password",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { data: session } = useSession();
  console.log("my seesion ;", session);

  const router = useRouter();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ adminLogin }) => {
      if (adminLogin.token) {
        toast({
          title: "Login success",
        });
        // router("/user/dashboard");
      }
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const adminLogin = { ...data };
    await errorWrapper(async () => {
      await login({
        variables: adminLogin,
      });
    });
  }
  useEffect(() => {
    // if (error) {
    //   const errMessage =
    //     error?.message || error?.cause?.result?.errors[0]?.message;
    //   toast({
    //     variant: "destructive",
    //     title: errMessage,
    //   });
    // }
    if (error) errorToast(error);
  }, [error]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-muted-foreground hover:opacity-75"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2" loading={loading}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
