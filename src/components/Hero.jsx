import { logo } from '../assets';
const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
        <nav className="flex justify-between items-center
        w-full mb-10 pt-3">
            <img style={{ width: 314.25, height: 92.625 }} src={logo} alt="sumz_logo" 
            className="w-28 object-contain" />

            <button
                type="button"
                onClick={() => window.open('https://github.com/dysonspheres/summaryAI')}
                className="black_btn"
            >
                GitHub
                
            </button>
        </nav>
        <h1 className="head_text">
            Summarize any text with <br className="max-md:hidden" />
            <span className="purple_gradient"> OpenAI's GPT-4 </span>
        </h1>
        <h2 className="desc">
            Generate a tldr for all the lengthy and dense texts you 
            encounter in life with summaryAI, an open-source AI powered
            summarizer that breaks down your most intimidating and time consuming
            texts into concise and transparent summaries. 
        </h2>
        <h2 className="purple_gradient mt-5">
            tldr: summaryAI has you covered.
        </h2>
    </header>
  )
}

export default Hero