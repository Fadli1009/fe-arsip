const Header = ({ text, subtext }) => {
    return (
        <div className="pb-5">
            <h1 className="mb-2 text-xl font-bold">{text}</h1>
            {subtext && (
                <p className="text-sm text-gray-500">{subtext}</p>
            )}
        </div>
    );
}

export default Header;