// Age

agesauvegarder = window.localStorage.getItem("agesauv");

if (agesauvegarder >= 18) {
  window.localStorage.setItem("agesauv", age);
} else {
  affichageerreur();
}

function affichageerreur() {
  let age = prompt("Quel est votre age ?");

  let pageerreur = document.querySelector(".pageerreur");
  if (age < 18) {
    pageerreur.classList.remove("visibility");

    let delais = 18 - age;
    document.querySelector(
      ".reviensdans"
    ).innerHTML = `Come back in ${delais} years.`;
  } else {
    window.localStorage.setItem("agesauv", age);
  }
}

// Garder en mémoire au chargement de la page

  let langueChoisie = window.localStorage.getItem("choixLangue");
    console.log(langueChoisie)

switch(langueChoisie){
    case "en": choixLangueEn()
    break;
    case "fr": choixLangueFr()
    break;
    case "ja": choixLangueJa()
    break;
    default: choixLangueEn()
}

// Définition des variables pour la traduction

let drapeauFr = document.querySelector("#drapeauFr");
let drapeauEn = document.querySelector("#drapeauEn");
let drapeauJa = document.querySelector("#drapeauJa");

drapeauEn.addEventListener("click", choixLangueEn);
drapeauFr.addEventListener("click", choixLangueFr);
drapeauJa.addEventListener("click", choixLangueJa);


    
// Ajout du changement de langue 
// Traduction de la page en anglais

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
    document.querySelector(".boutongetstarted").innerText = 'Get Started For Free';
    document.querySelector(".line-height").innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem neque quisquam fugit ducimus illum aspernatur dicta?';
    document.querySelector(".aPropos").innerText = 'About Us';
    document.querySelector(".ceQuonFait").innerText = 'What We Do';
    document.querySelector(".carriere").innerText = 'Carrier';
    document.querySelector(".nousContacter").innerText = 'Contact Us';
    document.querySelector(".faq").innerText = 'FAQ';
    document.querySelector(".blog").innerText = 'Blog';
    document.querySelector(".copyright").innerHTML = '<p><i class="fa-regular fa-copyright"></i>Copyright 2018 Huddle. All rights reserved.</p>';

        // Formulaire en anglais

    document.querySelector(".formulaireTitle").innerText = 'Start For Free By Filling Out The Form';
    document.querySelector(".yourSurname").innerText = 'Surname';
    document.querySelector(".yourName").innerText = 'First name';
    document.querySelector(".yourGender").innerText = 'Gender';
    document.querySelector(".iMMan").innerText = 'Man';
    document.querySelector(".iMWoman").innerText = 'Woman';
    document.querySelector(".iMOther").innerText = 'Other';
    document.querySelector(".dwts").innerText = "Don't want to say";
    document.querySelector(".yourBirth").innerText = 'Date of Birth';
    document.querySelector(".yourPhone").innerText = 'Phone';
    document.querySelector(".yourExpect").innerText = 'What do you expect from this community ?';
    document.querySelector(".needFriend").innerText = 'Increase my circle of friends';
    document.querySelector(".forWork").innerText = 'For work';
    document.querySelector(".feelLonely").innerText = 'I feel lonely';
    document.querySelector(".yourPassion").innerText = 'Share my passions';
    document.querySelector("#boutonEnvoyer").value = 'Send';

        // Article en anglais
       
    document.querySelector(".articleTrad1").innerText = 'Grow Together';
    document.querySelector(".paragrapheTrad1").innerHTML = 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.';
    document.querySelector(".articleTrad2").innerText = 'Flowing Conversations';
    document.querySelector(".paragrapheTrad2").innerHTML = "You wouldn't paginate a conversation in real life, so why do it online ? Our threads have just-in-time loading for a more natural flow.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.";
    document.querySelector(".articleTrad3").innerText = 'Your Users';
    document.querySelector(".paragrapheTrad3").innerHTML = "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.";

    // Pour enregistrer la langue au chargement de la page

    window.localStorage.setItem("choixLangue", "en");
}

    // Traduction de la page en français

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
    document.querySelector(".boutongetstarted").innerText = 'Commencez Gratuitement';
    document.querySelector(".line-height").innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem neque quisquam fugit ducimus illum aspernatur dicta?';
    document.querySelector(".aPropos").innerText = 'A Propos';
    document.querySelector(".ceQuonFait").innerText = 'Nos activités';
    document.querySelector(".carriere").innerText = 'Carrière';
    document.querySelector(".nousContacter").innerText = 'Nous Contacter';
    document.querySelector(".faq").innerText = 'FAQ';
    document.querySelector(".blog").innerText = 'Blog';
    document.querySelector(".copyright").innerHTML = '<p><i class="fa-regular fa-copyright"></i>Copyright 2018 Huddle. Tous droits réservés.</p>';

    // Formulaire en français

    document.querySelector(".formulaireTitle").innerText = 'Commencez gratuitement en remplissant le formulaire';
    document.querySelector(".yourSurname").innerText = 'Nom';
    document.querySelector(".yourName").innerText = 'Prénom';
    document.querySelector(".yourGender").innerText = 'Genre';
    document.querySelector(".iMMan").innerText = 'Homme';
    document.querySelector(".iMWoman").innerText = 'Femme';
    document.querySelector(".iMOther").innerText = 'Autre';
    document.querySelector(".dwts").innerText = 'Ne se prononce pas';
    document.querySelector(".yourBirth").innerText = 'Date de naissance';
    document.querySelector(".yourPhone").innerText = 'Téléphone';
    document.querySelector(".yourExpect").innerText = "Qu'attendez-vous de cette communauté ?";
    document.querySelector(".needFriend").innerText = "Agrandir mon cercle d'amis";
    document.querySelector(".forWork").innerText = 'Pour le travail';
    document.querySelector(".feelLonely").innerText = 'Je me sens seul';
    document.querySelector(".yourPassion").innerText = 'Partager mes passions';
    document.querySelector("#boutonEnvoyer").value = 'Envoyer';

    // Article en français
       
    document.querySelector(".articleTrad1").innerText = 'Grandir Ensemble';
    document.querySelector(".paragrapheTrad1").innerHTML = 'Générez des discussions significatives avec votre public et construisez une communauté forte et fidèle. Pensez aux conversations perspicaces que vous manquez avec un formulaire de commentaires.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.'
    document.querySelector(".articleTrad2").innerText = 'Conversations Fluides';
    document.querySelector(".paragrapheTrad2").innerHTML = "Vous ne pagineriez pas une conversation dans la vraie vie, alors pourquoi le faire en ligne ? Nos fils sont chargés juste à temps pour un flux plus naturel.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.";
    document.querySelector(".articleTrad3").innerText = 'Vos Utilisateurs';
    document.querySelector(".paragrapheTrad3").innerHTML = "L'intégration de Huddle à la solution d'authentification de votre application ne prend aucun temps. Cela signifie qu'une fois connectés à votre application, vos utilisateurs peuvent commencer à discuter immédiatement.</br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque delectus odio perspiciatis quam iste iure similique at corporis assumenda dignissimos ex quas voluptatibus deserunt, eius sit excepturi accusamus eaque.";

    // Pour enregistrer la langue au chargement de la page

    window.localStorage.setItem("choixLangue", "fr");

// Ajout du changement de langue



}
    // Traduction de la page en japonais

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
    document.querySelector(".boutongetstarted").innerText = '無料で始めましょう';
    document.querySelector(".line-height").innerText = '会社自体は非常に成功している会社です。賛美者この問題を解決しても誰も逃げないのに、私たちはその言葉によって彼を激怒させるだろうか？'
    document.querySelector(".aPropos").innerText = '私たちについて';
    document.querySelector(".ceQuonFait").innerText = 'N私達がすること';
    document.querySelector(".carriere").innerText = 'キャリア';
    document.querySelector(".nousContacter").innerText = 'お問い合わせ';
    document.querySelector(".faq").innerText = 'よくある質問';
    document.querySelector(".blog").innerText ='ブログ';
    document.querySelector(".copyright").innerHTML = '<p><i class="fa-regular fa-copyright"></i>著作権 2018 ハドル。無断転載を禁じます。</p>';
    
    // Formulaire en japonais

    document.querySelector(".formulaireTitle").innerText = 'フォームに記入して無料で始めましょう';
    document.querySelector(".yourSurname").innerText = '姓';
    document.querySelector(".yourName").innerText = 'ファーストネーム';
    document.querySelector(".yourGender").innerText = '性別';
    document.querySelector(".iMMan").innerText = '男';
    document.querySelector(".iMWoman").innerText = '女性';
    document.querySelector(".iMOther").innerText = '他の';
    document.querySelector(".dwts").innerText = '言いたくない';
    document.querySelector(".yourBirth").innerText = '生年月日';
    document.querySelector(".yourPhone").innerText = '電話';
    document.querySelector(".yourExpect").innerText = 'このコミュニティに何を期待しますか?';
    document.querySelector(".needFriend").innerText = '友達の輪を増やす';
    document.querySelector(".forWork").innerText = '作業用';
    document.querySelector(".feelLonely").innerText = '私は孤独を感じる';
    document.querySelector(".yourPassion").innerText = '私の情熱を共有してください';
    document.querySelector("#boutonEnvoyer").value = '送信';

    // Pop-up en japonais
       
    document.querySelector(".articleTrad1").innerText = '共に成長する';
    document.querySelector(".paragrapheTrad1").innerHTML = "視聴者と有意義なディスカッションを生み出し、強力で忠実なコミュニティを構築します。フィードバック フォームで見逃している洞察力に富んだ会話について考えてみましょう。会社自体は非常に成功している会社です。賛美者この問題を解決しても誰も逃げないのに、私たちはその言葉によって彼を激怒させるだろうか？"
    document.querySelector(".articleTrad2").innerText = '流れるような会話';
    document.querySelector(".paragrapheTrad2").innerHTML = "実生活では会話をページ分割することはないのに、なぜオンラインでそれを行うのでしょうか?私たちのスレッドは、より自然なフローのためにジャストインタイムでロードされます。会社自体は非常に成功している会社です。賛美者この問題を解決しても誰も逃げないのに、私たちはその言葉によって彼を激怒させるだろうか？"
    document.querySelector(".articleTrad3").innerText = 'ユーザー';
    document.querySelector(".paragrapheTrad3").innerHTML = "Huddle をアプリの認証ソリューションと統合するのに時間はかかりません。つまり、アプリにサインインすると、ユーザーはすぐにチャットを開始できるようになります。会社自体は非常に成功している会社です。賛美者この問題を解決しても誰も逃げないのに、私たちはその言葉によって彼を激怒させるだろうか？"

    // Pour enregistrer la langue au chargement de la page

    window.localStorage.setItem("choixLangue", "ja");

}

function langue(langueOnClick) {
  if (langueOnClick === "japonais") {
    choixLangueJa();
  } else if (langueOnClick === "anglais") {
    choixLangueEn();
  } else if (langueOnClick === "français") {
    choixLangueFr();
  }
}

// Ajout en mémoire de la langue définie
