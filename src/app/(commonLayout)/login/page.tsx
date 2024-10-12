"use client"
import { useLoginUserMutation } from "@/redux/api/baseApi";
import { Button, Input, useNavbar } from "@nextui-org/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    email: string;
    password: string;
}
const login = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const [loginUser] = useLoginUserMutation()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        const res = await loginUser(userData)
        console.log(' login user response', res)
        
    };
    return (
        <div>
            <h1 className="text-center mt-2 font-semibold text-xl">Please Login</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 flex justify-center flex-col gap-4 mx-10 sm:mx-0">
                   
                    <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="email"  {...register("email")} variant="underlined" label="Email" />
                    </div>
                    <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="password"  {...register("password")} variant="underlined" label="Password" />
                    </div>
                    <Button type="submit">Sign Up</Button>
                    <p>New Here <Link href="/register">Login</Link></p>
                </form>
          
            </div>
        </div>

    );
};

export default login;