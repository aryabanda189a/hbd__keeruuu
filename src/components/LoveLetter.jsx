import { useState } from "react";

export default function LoveLetter({ onFinish }) {
  const [isOpen, setIsOpen] = useState(false);

  // Edit this text to whatever final message you want to show
  const letterText = `Hieeeee kannaaaa.....happieeeeee birthdayyyyy maaaa...... 

This is yourrr boyfriend hereeee....soooo Nak em chepalo ardam aytaleee kanii edokati vagudam ani matram fix aynaaaa....mamaaaaa firstlyyyy love youuu sooooo muchhhhhh❤️....inta eppudu alavatu aynavo naku telvaduuu Kani chalaaa attach aypoynav.....idi eppudu ardam ayindi telusaaaa nuvu trip ki poynapuduuu chalaaaaaa michhh aynaaaa soooo appudu enta miss aynano niku telusu naku telusuu ippudu adi matladute edusta kusoni....starting looooo chalaaaa bhayapadutunde nana niku....ndhukoo emo telvadu Kani ni dagara matladali ante edo strict pilla idi edi padute adi matladalemu chuskoni matladali anatu untundeee....eppudu close aynavo telvad Kani sudden ga close aypenav...aa sneha matter and all jarigindi kadaa ade time lo chalaaaa close aypenav....The way you cared about me adi chalaa nachiii close aypenaaaa nikuu....iga aa closeness kasta comfort laga marindi.....iga aa comfort lo Mundi una bhayam motam poyindiiii.....so as time passed aa closeness and comfort nachiiii padipoynaaaa....eppudu padano telvad Kani padipoynaaa.....Kani daridraniki godavalu start aynayyyy.....aa godavala Vala nuvu eda dooram aytav ana bada tho iga risk thiskoni finallyyy April 17th 2025 roju confess chesnaaa.....luckily accept chesnavvvv😁😁😁.....iga appudu start ayindi nana mana journeyyyyy......I secretly named our journey as keeru...idi niku nenu edo muddu Peru laga petukuna anpinchindi kaniiii keeru has a different meaning......kee from keerthana and ru from aruu😁😁😁.....idii niku Kavali aneee eppuduu chepaleeeee and it's timeee to let u know about thatttt.....sarelee adi pakana peduteee iga after 17th inka closeness perigindi and expectations periginay idarki.....iga telsinde immature laga behave chesi bangaram lanti reln ni karab chesna on 28th may 2025.....iga aa godavalu and all melaga set aye sariki time patindi....Kani avi sort aynaka kuda manaki awkwardness eppudu rale nana....anta Normal gane unde manam....manam tbh break ayna inka reln lo unateee unde Nakuu.....Kani edo Missinggg nana mana madyalooo....so aa 5 months chalaaa suffer aynam idaram....iga nake aa devudu budhi putinchiiii Mala resume cheskundam ani adginaaa....and appudu kuda opukunavvvvvv😁😁😁.....so iga appudu start ayindiiiiiiiii malaaaaa😁😁.....apat nunchi nuvh chupinchina care and naku chesina support ki chalaaaaaa padipoyna nenuuu....nijam cheptuna kada nanaa....ee muhurtam lo niku padinano telvad kaniii.....aaa taravata niku padani roju ledu Maa...nuvu nanu padeyaniki ekkuva kastapadalsina avsram kuda ledu telusaaa.....just China smile tho oka pic pedute padipotaaa😁😁.....papammm appudu appudu chalaa feel aytunav ee madya nuvu anta chestunav nen em chestalen ani....nana nijam cheptuna naku ni presence value chalaaa ekkuva....nuvu em anukuntavo telvad Kani.....nuvu ankuna Dani kana 100000× ekkuvaaaa nakuuuu😁😁😁......I am really sorryyyy forr alll thee pain which you went through in these dayssss....and I promise you that I won't let that happen in the futureeee and pakkaaaaa kannanaa chalaaaaa manchiga chuskuntaaa ninuuuuu.....love you to the coreeeee kannaaaa🫂❤️ 

Btww I want a beautiful end to the story of keeruuu.....gurtu petukoooo idiiiii plssssss


Once againnnnnn.....wish you a happieeeeeeeeee birthdayyyyyyy my loveeeeeeeeee🫂❤️.....this is keeruu signing offff for nowww with lotssssss and tonssssss of loveeeeeee ❤️❤️❤️ 
`;
  return (
    <div className="love-letter-page">
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <div className="envelope-pocket" />
        <div className="envelope-flap" />
        <div className="letter">
          <h2>One Last Message 💌</h2>
          <p>{letterText}</p>
        </div>
        <button
          type="button"
          className="envelope-seal"
          onClick={() => setIsOpen(true)}
          aria-label="Open the letter"
        >
          💖
        </button>
      </div>

      {!isOpen && (
        <p className="letter-hint">
          Please click on the glowing heart for a little surprise 💌
        </p>
      )}

      {isOpen && (
        <button className="next-btn letter-next" onClick={onFinish}>
          Continue to the ending ✨
        </button>
      )}
    </div>
  );
}
