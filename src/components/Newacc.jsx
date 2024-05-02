function Signin(){
    return (
<div className="flex justify-center items-center m-auto h-screen">
        <div className="bg-slate-200 shadow-md rounded-lg border-2 border-gray-400 flex-col justify-center items-center flex w-72 h-69 ">
        <h1 className=" text-gray-900 font-semibold my-4">Create your Acoount</h1>
        <label  className="inline-block text-sm font-medium leading-6 text-gray-900 place-self-start ml-5 ">
        Username:
      </label>
        <input type="text" name="Username" className="block w-64 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4"/>
        <label  className="inline-block text-sm font-medium leading-6 text-gray-900 place-self-start ml-5">
        Password:
      </label>
        <input type="password" name="Password" className="block w-64 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"/>
        <a href="/home" target="_self">
        <button className="bg-indigo-300 rounded-full text-gray-900 m-3 w-14 h-7 hover:bg-indigo-500" >Create</button>
        </a>
        </div></div>
    );
}
export default Signin