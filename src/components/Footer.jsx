const Footer = () => {
    return (
        <footer className="h-a flex justify-around items-center border-t-2 border-solid bg-[#202E40] text-white shadow-[0_0_40px_0_rgba(0,0,0,1)] z-10">
            <div className="flex flex-col m-2">
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://instagram.com"><img className="w-5 h-5" src="/public/instagram.png" alt="" /> Instagram</a>
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://twitter.com"><img className="w-5 h-5" src="/public/twitter.png" alt="" />Twitter</a>
            <a className="flex flex-row items-center gap-1 font-bold hover:underline" target="_blank" href="https://facebook.com"><img className="w-6 h-6" src="/public/facebook.png" alt="" />Facebook</a>
            </div>
            <div className="flex flex-col m-2">
            <a className="flex flex-row items-center gap-1 font-bold hover:underline" href=""><img className="w-6 h-6" src="/public/whatsapp.png" alt="" />WhatsApp</a>
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href=""><img className="w-5 h-5" src="/public/telegram.png" alt="" />Telegram</a>
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" target="_blank" href="https://hotmail.com"><img className="w-5 h-5" src="/public/mail.png" alt="" />Hotmail</a>
            </div>
            </footer>
    );
};

export default Footer