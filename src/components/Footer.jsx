import '../app.css';

function Footer(){
    return(
        <>
            <footer className="absolute inset-x-0 bottom-0 h-12  flex justify-between items-center bg-slate-200 border-t border-slate-400">
                <p className="text-stone-700 pl-2 " >&copy;{new Date().getFullYear()} HappyTails</p>
                <ul className="pr-2 flex text-stone-700">
                    <li className="mr-4 hover:text-sky-500"><a href="#About" className="underline decoration-stone-600 hover:decoration-sky-500">About</a></li>
                    <li className="mr-4 hover:text-sky-500"><a href="#PrivacyPolicy" className="underline  decoration-stone-600 hover:decoration-sky-500">Privacy</a></li>
                    <li className="hover:text-sky-500"><a href="#Support" className="underline  decoration-stone-600 hover:decoration-sky-500">Support</a></li>
                </ul>
                

            </footer>
            

        </>

    );
}
export default Footer