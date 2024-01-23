// Définition des variables

let drapeauFr = document.querySelector("#drapeauFr");
let drapeauEn = document.querySelector("#drapeauEn");
let drapeauJa = document.querySelector("#drapeauJa");

drapeauEn.addEventListener("click", choixLangueEn);
drapeauFr.addEventListener("click", choixLangueFr);
drapeauJa.addEventListener("click", choixLangueJa);

    
// Ajout du changement de langue 

function choixLangueEn (){

    document.querySelector(".tryitfree").innerText = 'Try It Free';
    document.querySelector("h1").innerText = 'Build The Community Your Fans Will Love';
    document.querySelector(".firstp").innerText = 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. ';
    document.querySelector(".gsff").innerText = 'Get Started For Free';
    document.querySelector("#firstH").innerText = 'Grow Together';
    document.querySelector("#premierP").innerText = 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ';
    document.querySelector("#secondH").innerText = 'Flowing Conversations';
    document.querySelector("#deuxiemeP").innerText = "You wouldn't paginate a conversation in real life, so why do it online ? Our threads have just-in-time loading for a more natural flow. ";
    document.querySelector("#thirdH").innerText = 'Your Users';
    document.querySelector("#troisiemeP").innerText = "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ";
    document.querySelector("#fourthH").innerText = 'Ready To Build Your Community ?';
    document.querySelector("#boutongetstarted").innerText = 'Get Started For Free';
    document.querySelector(".aPropos").innerText = 'About Us';
    document.querySelector(".ceQuonFait").innerText = 'What We Do';
    document.querySelector(".carriere").innerText = 'Carrier';
    document.querySelector(".nousContacter").innerText = 'Contact Us';
    document.querySelector(".copyright").innerHTML = '<p><i class="fa-regular fa-copyright"></i>Copyright 2018 Huddle. All rights reserved.</p>';

}

function choixLangueFr(){

    document.querySelector(".tryitfree").innerText = 'Essai Gratuit';
    document.querySelector("h1").innerText = 'Créez la communauté adorée pour vos fans ';
    document.querySelector(".firstp").innerText = 'Huddle réinvente la façon dont nous construisons des communautés. Vous avez une voix, mais votre public aussi. Créez des liens avec vos utilisateurs en engageant une véritable discussion.';
    document.querySelector(".gsff").innerText = 'Commencez Gratuitement';
    document.querySelector("#firstH").innerText = 'Grandir Ensemble';
    document.querySelector("#premierP").innerText = 'Générez des discussions significatives avec votre public et construisez une communauté forte et fidèle. Pensez aux conversations perspicaces que vous manquez avec un formulaire de commentaires.';
    document.querySelector("#secondH").innerText = 'Conversations Fluides';
    document.querySelector("#deuxiemeP").innerText = 'Vous ne pagineriez pas une conversation dans la vraie vie, alors pourquoi le faire en ligne ? Nos fils sont chargés juste à temps pour un flux plus naturel.';
    document.querySelector("#thirdH").innerText = 'Vos Utilisateurs';
    document.querySelector("#troisiemeP").innerText = "L'intégration de Huddle à la solution d'authentification de votre application ne prend aucun temps. Cela signifie qu'une fois connectés à votre application, vos utilisateurs peuvent commencer à discuter immédiatement.";
    document.querySelector("#fourthH").innerText = 'Prêt à bâtir votre communauté ?';
    document.querySelector("#boutongetstarted").innerText = 'Commencez Gratuitement';
    document.querySelector(".aPropos").innerText = 'A Propos';
    document.querySelector(".ceQuonFait").innerText = 'Nos activités';
    document.querySelector(".carriere").innerText = 'Carrière';
    document.querySelector(".nousContacter").innerText = 'Nous Contacter';
    document.querySelector(".copyright").innerText = '<p><i class="fa-regular fa-copyright"></i>Copyright 2018 Huddle. Tous droits réservés.</p>';

}

function choixLangueJa (){
    document.querySelector(".tryitfree").innerText = '無料でお試しください';
    document.querySelector("h1").innerText = 'ファンが気に入るコミュニティを構築する ';
    document.querySelector(".firstp").innerText = 'Huddle はコミュニティを構築する方法を再考します。あなたには発言権がありますが、視聴者にも発言権があります。本物のディスカッションをしながら、ユーザーとのつながりを築きましょう。';
    document.querySelector(".gsff").innerText = '無料で始めましょう';
    document.querySelector("#firstH").innerText = '共に成長する';
    document.querySelector("#premierP").innerText = '視聴者と有意義なディスカッションを生み出し、強力で忠実なコミュニティを構築します。フィードバック フォームで見逃している洞察力に富んだ会話について考えてみましょう。';
    document.querySelector("#secondH").innerText = '流れるような会話';
    document.querySelector("#deuxiemeP").innerText = '実生活では会話をページ分割することはないのに、なぜオンラインでそれを行うのでしょうか?私たちのスレッドは、より自然なフローのためにジャストインタイムでロードされます。';
    document.querySelector("#thirdH").innerText = 'ユーザー';
    document.querySelector("#troisiemeP").innerText = "Huddle をアプリの認証ソリューションと統合するのに時間はかかりません。つまり、アプリにサインインすると、ユーザーはすぐにチャットを開始できるようになります。";
    document.querySelector("#fourthH").innerText = 'コミュニティを構築する準備はできましたか?';
    document.querySelector("#fourthH").style.fontSize = "18px";
    document.querySelector("#boutongetstarted").innerText = '無料で始めましょう';
    document.querySelector(".aPropos").innerText = '私たちについて';
    document.querySelector(".ceQuonFait").innerText = 'N私達がすること';
    document.querySelector(".carriere").innerText = 'キャリア';
    document.querySelector(".nousContacter").innerText = 'お問い合わせ';
    document.querySelector(".copyright").innerText = '<p><i class="fa-regular fa-copyright"></i> 著作権 2018 ハドル。無断転載を禁じます。</p>';
    document.querySelector(".faq").innerText = 'よくある質問';
    document.querySelector(".blog").innerText ='ブログ';
}

function langue(langueOnClick){
if (langueOnClick === "japonais"){
    choixLangueJa()
}
else if (langueOnClick === "anglais"){
   choixLangueEn() 
}
else if (langueOnClick === "français"){
    choixLangueFr()
}
}

// Ajout en mémoire de la langue définie