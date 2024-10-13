"use client"
import { useCreateUserMutation } from "@/redux/api/baseApi";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'

interface IFormInput {
    email: string;
    password: string;
    userName: string;
    profileImage: string;
    // role: string;
}
const Register = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const [createUser] = useCreateUserMutation()
    const router = useRouter()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const userData = {
            email: data.email,
            password: data.password,
            userName: data.userName,
            profileImage: data.profileImage,
            role: "user"
        }
        const res = await createUser(userData)
        console.log(' create user response', res)
        if(res.data){
            router.push('/login')
        }
 
    };
    return (
        <div>
            <h1 className="text-center mt-2 font-semibold text-xl">Please Register</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} key="underline" className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 flex justify-center flex-col gap-4 mx-10 sm:mx-0">
                    {/* <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 flex justify-center flex-col gap-4 mx-10 sm:mx-0"> */}
                    <div key="userName" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="name"  {...register("userName")} variant="underlined" label="Name" />
                    </div>
                    <div key="email" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="email"  {...register("email")} variant="underlined" label="Email" />
                    </div>
                    <div key="password" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="password"  {...register("password")} variant="underlined" label="Password" />
                    </div>

                    <div key="profileImage" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input type="address"  {...register("profileImage")} variant="underlined" label="ProfileImage" />
                    </div>
                    {/* </div> */}
                    <Button type="submit">Sign Up</Button>
                    <p>Already have an account Please <Link href="/login">Login</Link></p>
                </form>
              
            </div>
        </div>
    );
};

export default Register;