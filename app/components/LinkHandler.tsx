import Link from 'next/link'; 
const SmartLink = ({ href, link }) => {
    const regEx = /^http/;
  
    return regEx.test(href) ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    ) : (
      <Link href={href}>
        <a>{link}</a>
      </Link>
    );
  };


export default SmartLink;