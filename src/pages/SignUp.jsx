import BlueButton from "../components/BlueButton";
import GreyButton from "../components/GreyButton";
import TextField from "../components/TextField";

const SignUp = () => {
  return (
    <section className="bg-white p-9 flex justify-center items-center h-screen">
      <section className="bg-transparent h-full w-full max-h-[1024px] max-w-[1440px] flex flex-row">
        <article className="bg-authbg bg-center bg-cover rounded-2xl py-28 px-[5%] flex flex-col justify-between text-center w-1/2 text-white">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black">Welcome to migasuto</h1>
            <p className="font-medium text-2xl">We are dedicated to providing high-quality research and analysis to help our clients make informed decisions. We put our clients first in every decision we make, which is why we will always succeed in delivering first- class solutions to all our client&apos;s challenges.</p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Brand Equity Report</h2>
            <p className="text-base w-[70%] self-center">Effortlessly work together with your team in real-time.</p>
          </div>
        </article>

        <article className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-row gap-0 p-1 bg-grey-10 rounded-lg">
            <BlueButton btnName={'SignUp'} />
            <GreyButton btnName={'Login'} />
          </div>

          <div>
            <TextField fieldName={'Email Address'} placeholder={'Enter Email'} />
          </div>
        </article>
      </section>
    </section>
  )
}

export default SignUp;
