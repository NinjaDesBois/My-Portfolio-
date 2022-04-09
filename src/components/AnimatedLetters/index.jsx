import './index.scss';

const AnimatedLetters = ({ letterCLass , strArray , idx}) => {
    return (
        <span>
           {
               strArray.map((char , i) => (

                <span key={char+i} className ={`${letterCLass} _${i +idx}`}>
                {char}
                </span>
               ))
           }
        </span>
    )
};

export default AnimatedLetters