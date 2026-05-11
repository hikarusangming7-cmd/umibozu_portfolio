const umiTrap = document.getElementById("umi_click");
const umiEscape = document.getElementById("umi_escape");
const umiDrop = document.getElementById("umi_drop");
const ashiato = document.querySelectorAll(".ashiato");
const bone = document.querySelectorAll(".bone");
const honeChange =document.getElementById("hone1");
const wan = document.querySelector(".wan");
const tasoUmi = document.getElementById("taso_umi");
const hidingUmi = document.querySelector(".umihide");


const answerBtn = document.getElementById("answerBtn");


honeChange.addEventListener("click",(e)=>{
  e.target.src="images/umisanpo.png"
  
});


tasoUmi.addEventListener("click",()=>{

  tasoUmi.disabled = true;
  tasoUmi.style.cursor = "default"; 


  alert("スイッチを押しました。10秒に1回それぞれの場所で何かが起きています。")
  setInterval(()=>{
    // hidingUmi.style.transform="translateY(-40px)";
      hidingUmi.style.transform="translateY(var(--jump-height))";
    setTimeout(()=>{
      hidingUmi.style.transform="translateY(0)";
    },300);

    works[0].image = "images/reactunmeikaidan_gousei.jpg";
    
    // 【重要】もし今モーダルで1番目の作品(index 0)を開いていたら、表示を更新する
    if (currentIndex === 0) {
      showWork(0);
    }

    setTimeout(() => {
      works[0].image = "images/reactunmeikaidan2.png";
      if (currentIndex === 0) {
        showWork(0);
      }
    }, 1000);

  },10000);
}, { once: true }); 

















//モーダルここから


const works = [
 {
   image: "images/reactunmeikaidan2.png",
   moveY: "-20px",
   category: "作ったもの：マルチエンディングホラー小説ゲーム",
   title: "タイトル：運命怪談",
   period: "制作期間：製作中",
   skill: "使用したスキル：React,Tailwind CSS,TypeScript,MySQL,Node.js,AWS",
   url: "URL"
 },
 {
   image: "images/wordpress.png",
   moveY: "-20px",
   category: "作ったもの：犬猫保護団体サイト",
   title: "タイトル：Save Animals",
   period: "制作期間：1週間",
   skill: "使用したスキル：WordPress",
   url: "https://shy-iki-9326.main.jp/wordpress/"
 },
 {
   image: "images/storymakerbg.png",
   moveY: "-20px",
   category: "作ったもの：物語やキャラクター設定、告白の台詞を考えるアプリ",
   title: "タイトル：物語メーカー",
   period: "制作期間：10日間",
   skill: "使用したスキル：HTML / CSS / JavaScript",
   url: "https://hikarusangming7-cmd.github.io/Story__Maker/"


 }
];


let currentIndex = 0;


const modal = document.getElementById("workModal");
const modalImage = document.getElementById("modalImage");








const workCategory = document.getElementById("workCategory");
const workTitle = document.getElementById("workTitle");
const workPeriod = document.getElementById("workPeriod");
const workSkill = document.getElementById("workSkill");
const workUrl = document.getElementById("workUrl");


const thumbnails = document.querySelectorAll(".work-thumb");


function showWork(index) {
 const work = works[index];


 modalImage.src = work.image;
 workCategory.textContent = work.category;
 workTitle.textContent = work.title;
 workPeriod.textContent = work.period;
 workSkill.textContent = work.skill;
 workUrl.href = work.url;
 workUrl.textContent =work.url;
 modalImage.style.objectPosition = work.position || "center center";
 modalImage.style.transform = `translateY(${work.moveY || "0px"})`;
}






thumbnails.forEach((thumb) => {
 thumb.addEventListener("click", () => {
   currentIndex = Number(thumb.dataset.index);
   showWork(currentIndex);
   modal.classList.add("is-open");
 });
});


document.getElementById("nextBtn").addEventListener("click", () => {
 currentIndex++;


 if (currentIndex >= works.length) {
   currentIndex = 0;
 }


 showWork(currentIndex);
});


document.getElementById("prevBtn").addEventListener("click", () => {
 currentIndex--;


 if (currentIndex < 0) {
   currentIndex = works.length - 1;
 }


 showWork(currentIndex);
});


document.getElementById("modalClose").addEventListener("click", () => {
 modal.classList.remove("is-open");
});


modal.addEventListener("click", (e) => {
 if (e.target === modal) {
   modal.classList.remove("is-open");
 }
});




//モーダルここまで





// let mm = gsap.matchMedia();

// umiTrap.addEventListener("click", () => {
  // ...（略：ボタン無効化や逃げるアニメーション）

//   mm.add({
//     isDesktop: "(min-width: 1025px)",
//     isTablet:  "(min-width: 601px) and (max-width: 1024px)",
//     isMobile:  "(max-width: 600px)"
//   }, (context) => {
//     const { isDesktop, isTablet, isMobile } = context.conditions;

//     // 変数に高さを代入（ここで細かく調整）
//     let dropTop;
//     if (isDesktop) dropTop = 170; // PC
//     if (isTablet)  dropTop = 120; // タブレット
//     if (isMobile)  dropTop = 80;  // スマホ

//     gsap.to(umiDrop, {
//       top: dropTop, // 決まった数値を入れる
//       duration: 2.7,
//       ease: "bounce.out",
//       onComplete: () => {
//         // ...（足跡のアニメーション）
//       }
//     });
//   });

//   wan.style.visibility = "visible";
// }, { once: true });























let mm = gsap.matchMedia(); 

umiTrap.addEventListener("click",()=>{

umiTrap.disabled = true;
umiTrap.style.cursor = "default"; 





     gsap.to(umiEscape, {
    x: -1000,         // 画面外まで左に移動
    duration: 1.2,    // 走り去る時間
    ease: "power2.in", // 徐々に加速して逃げる
    opacity: 0,       // 遠ざかるにつれて消える
    pointerEvents: "none"
  });



  mm.add({
    isA: "(min-width: 1350px)",
    isB:  "(min-width: 1270px) and (max-width: 1350px)",
    isC:  "(min-width: 1200px) and (max-width: 1270px)",
    isD:  "(min-width: 1000px) and (max-width: 1200px)",
    isE:  "(min-width: 800px) and (max-width: 1000px)",
    isF:  "(min-width: 600px) and (max-width: 800px)"
  }, (context) => {
    const { isA, isB, isC, isD, isE, isF} = context.conditions;

    // 変数に高さを代入（ここで細かく調整）
    let dropTop;
    if (isA) dropTop = 170; 
    if (isB)  dropTop = 130; 
    if (isC)  dropTop = 100;  
    if (isD)  dropTop = 40; 
    if (isE)  dropTop = 20;
    if (isF)  dropTop = 10;





  




gsap.to(umiDrop, {
    top: dropTop,           // 1枚目があった高さ（0）にピタッと止まる
    duration: 2.7,    // 落ちるスピード
    ease: "bounce.out", // 着地したときに「ボヨン」と弾む
 


  onComplete: () => {
      
    
      gsap.to([ashiato, bone],{
        x: 15,            // 右へワープ
        y: -15,           // 上へワープ
        duration: 0.1,    // 移動は一瞬
        repeat: -1,       // ずっと
        yoyo: true,       // 行って戻る。（おもちゃのヨーヨーから来てる）
        repeatDelay: 0.5, // 止まっている「間」を長くしてカチカチ感を出す
        ease: "steps(1)"  // 途中の動きを見せない

      
      });
      
    }



});
  });
wan.style.visibility="visible";

}, { once: true }); 





answerBtn.addEventListener("click",()=>{
  gsap.to(answerBtn,{
    x: 220,
    y: -120,
    rotation: 40,
    scale: 0.7,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  })
});

















// gsap.fromTo(
//     //ターゲット（どの要素を動かすのか）""の中にクラス名とかを書く
//     ".sign-img",
// //最初の状態
// {},
// //最後の状態
// {}
// );



















document.addEventListener("DOMContentLoaded", () => {
  // アニメーションさせるガイド線を取得
  const maskPaths = document.querySelectorAll("#draw-u path");



let mm = gsap.matchMedia();
 mm.add("(min-width: 500px)", () => {



  maskPaths.forEach((path) => {
    // 正確な長さを測る
    const len = path.getTotalLength();
    
    // 初期状態：線を隠す（dasharrayで点線にし、offsetでずらす）
    path.style.strokeDasharray = len+20;
    path.style.strokeDashoffset = len+20;
    
    // 重要：マスクとして機能させるために色は「白」
  path.style.opacity = "0";


  });

  // GSAPで書き順通りにアニメーション
  gsap.to(maskPaths, {
    strokeDashoffset: 0,
    opacity: 1,
    duration: 0.45,      // 1本あたりの描画時間
    stagger: 0.3,       // 次の線が始まるまでの待ち時間
    ease: "none",


  });
});


gsap.to(".hone, .ashi", {
  x: 10,
  y: -10,
  rotation: 10,
  duration: 0.3, // 切り替わる速さ
  repeat: -1,
  yoyo: true,
  ease: "power2.in", // 瞬間的に動くけど、わずかな勢いをつける
  repeatDelay: 0.2,   // 止まっている「間」を作る
  stagger: 0.2
});



   mm.add("(max-width: 500px)", () => {
    maskPaths.forEach((path) => {
      path.style.opacity = "1";
      path.style.strokeDashoffset = "0";
    });
  });

    });




//画面サイズ小さくしたときのインデックスのscrolltrigger

mm.add("(max-width: 1000px)", () => {
  // ここに書いたコードは1000px以下の時だけ実行される
  const mediaPairs = [
    { trigger: "#scrolltrigger", sign: ".m_home" },
    { trigger: "#section_aboutme", sign: ".m_about" },
    { trigger: "#section_work", sign: ".m_works" },
    { trigger: "#section_contact", sign: ".m_contact" },
  ];

  mediaPairs.forEach((media) => {
    gsap.to(media.sign, {
      zIndex: 100,
      scale: 1.25,
      scrollTrigger: {
        scroller: ".column.center",
        trigger: media.trigger, // mediaに修正
        start: "top center",
        end: "bottom center",
        toggleClass: "is-active",
        toggleActions: "play reverse play reverse",
      }
    });
  });
});
//ここまで











// ここに「真ん中のID」と「右側の看板のID」のペアをどんどん追加する
const pairs = [
   { trigger: "#scrolltrigger", sign: "#sign_toppage" },
  { trigger: "#section_aboutme", sign: "#sign_aboutme" },
  { trigger: "#section_work", sign: "#sign_myworks" },
  { trigger: "#section_contact",  sign: "#sign_contact" },
];

pairs.forEach((pair) => {
  gsap.to(pair.sign, {
    scale: 1.25, 
    duration: 0.1,
    scrollTrigger: {
      scroller: ".column.center", // 真ん中のスクロールパネルのクラス名（それぞれ.忘れないように）
      trigger: pair.trigger,     // 真ん中の各セクション
      immediateRender: false, // 読み込みを遅らせて、他のGSAPアニメーションと衝突しないようにする
      start: "top center",       // セクションの上が画面中央に来たら
      end: "bottom center",      // セクションの下が画面中央を過ぎたら
      toggleActions: "play reverse play reverse", // 範囲外に出たら小さく戻る
    }
  });
});












//ローディング画面ここから

window.addEventListener("load", () => {
  const loader = document.querySelector('#loading');

   setTimeout(() => {
    loader.classList.add('is-loaded');
  }, 1500);

  // 2. 「アニメーション（transition）が終わったら」消去する、というイベントを使う
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
  });
});





const mediaQuery = window.matchMedia('(max-width: 1000px)');
const count = document.querySelector('.count');


const updateCount=(e)=>{
  // 要素が存在するか確認（エラー防止）
if (window.innerWidth <= 767) {
    // 600px以下のときの処理
    count.textContent = "12匹！"; 
} else if (window.innerWidth <= 1000) {
    // 601px 〜 1000pxのときの処理
    count.textContent = "15匹！";
} else {
    // それ以上のときの処理
    count.textContent = "16匹！";
}
}

// 画面サイズ変更の監視
mediaQuery.addEventListener('change', updateCount);
// 読み込み時にも実行
updateCount(mediaQuery);