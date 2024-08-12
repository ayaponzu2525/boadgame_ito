const prompts = [
    {"prompt": "コンビニの商品の人気（1:人気ない-100:人気ある）", },
    {"prompt": "100円ショップの商品の人気（1:人気ない-100:人気ある）", },
    {"prompt": "飲食店の人気（1:人気ない-100:人気ある）", },
    {"prompt": "駅の人気（1:人気ない-100:人気ある）", },
    {"prompt": "中華料理の人気（1:人気ない-100:人気ある）", },
    {"prompt": "学校給食の人気（1:人気ない-100:人気ある）", },
    {"prompt": "有名人の人気（1:人気ない-100:人気ある）", },
    {"prompt": "子供に人気なもの（1:人気ない-100:人気ある）", },
    {"prompt": "アニメ・漫画のキャラの人気（1:人気ない-100:人気ある）", },
    {"prompt": "ゲームキャラの人気（モンスター含む）（1:人気ない-100:人気ある）", },
    {"prompt": "キャラクターの人気（ゆるキャラ含む）（1:人気ない-100:人気ある）", },
    {"prompt": "プレゼント・お土産の人気（1:人気ない-100:人気ある）", },
    {"prompt": "建物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "住みたい国や場所の人気（1:人気ない-100:人気ある）", },
    {"prompt": "アプリ・ウェブサービスの人気（1:人気ない-100:人気ある）", },
    {"prompt": "乗り物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "俳優の人気（1:人気ない-100:人気ある）", },
    {"prompt": "悪役の人気（1:人気ない-100:人気ある）", },
    {"prompt": "食べ物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "飲み物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "生き物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "おもちゃの人気（1:人気ない-100:人気ある）", },
    {"prompt": "電化製品の人気（1:人気ない-100:人気ある）", },
    {"prompt": "映画の人気（1:人気ない-100:人気ある）", },
    {"prompt": "ミュージシャンの人気（1:人気ない-100:人気ある）", },
    {"prompt": "お菓子・スイーツ・アイスの人気（1:人気ない-100:人気ある）", },
    {"prompt": "ペットの人気（1:人気ない-100:人気ある）", },
    {"prompt": "職業の人気（1:人気ない-100:人気ある）", },
    {"prompt": "おにぎりの具の人気（1:人気ない-100:人気ある）", },
    {"prompt": "パンの種類の人気（1:人気ない-100:人気ある）", },
    {"prompt": "趣味の人気（1:人気ない-100:人気ある）", },
    {"prompt": "メーカー（ブランド）の人気（1:人気ない-100:人気ある）", },
    {"prompt": "アニメ・漫画の人気（1:人気ない-100:人気ある）", },
    {"prompt": "ゲームの人気（1:人気ない-100:人気ある）", },
    {"prompt": "和食料理の人気（1:人気ない-100:人気ある）", },
    {"prompt": "洋食料理の人気（1:人気ない-100:人気ある）", },
    {"prompt": "声優の人気（1:人気ない-100:人気ある）", },
    {"prompt": "歌・曲の人気（1:人気ない-100:人気ある）", },
    {"prompt": "映画の登場人物の人気（1:人気ない-100:人気ある）", },
    {"prompt": "アスリートの人気（1:人気ない-100:人気ある）", },
    {"prompt": "スポーツの人気（1:人気ない-100:人気ある）", },
    {"prompt": "テレビ番組の人気（1:人気ない-100:人気ある）", },
    {"prompt": "デートスポットの人気（1:人気ない-100:人気ある）", },
    {"prompt": "ハネムーンで行きたい場所の人気（1:人気ない-100:人気ある）", },
    {"prompt": "酒のつまみ・居酒屋メニューの人気（1:人気ない-100:人気ある）", },
    {"prompt": "化粧品の人気（1:人気ない-100:人気ある）", },
    {"prompt": "ボードゲームの人気（1:人気ない-100:人気ある）", },
    {"prompt": "資格・免許の人気（1:人気ない-100:人気ある）", },
    {"prompt": "旅行したい国や場所の人気（1:人気ない-100:人気ある）", },
    {"prompt": "旅行先に持っていきたいもの（1:いらない-100:持っていきたい）", },
    {"prompt": "ゾンビと戦うときに持っていきたいもの（1:いらない-100:持っていたい）", },
    {"prompt": "無人島に持っていきたいもの（1:いらない-100:持っていきたい）", },
    {"prompt": "一人暮らしに必要なもの（1:いらない-100:必須）", },
    {"prompt": "美しいもの（1:美しくない-100:美しい）", },
    {"prompt": "こわいもの（1:こわくない-100:こわい）", },
    {"prompt": "楽しいこと（1:楽しくない-100:楽しい）", },
    {"prompt": "嬉しいこと（1:嬉しくない-100:嬉しい）", },
    {"prompt": "カバンに入っていたら嬉しいもの（1:嬉しくない-100:嬉しい）", },
    {"prompt": "なりたい生き物（1:なりたくない-100:なりたい）", },
    {"prompt": "なりたい歴史上の人物（1:なりたくない-100:なりたい）", },
    {"prompt": "なりたい有名人（1:なりたくない-100:なりたい）", },
    {"prompt": "なりたいキャラ（アニメ・漫画・ゲーム）（1:なりたくない-100:なりたい）", },
    {"prompt": "学校にあるものの大きさ（1:小さい-100:大きい）", },
    {"prompt": "歴史上の人物の強さ（1:弱い-100:強い）", },
    {"prompt": "映画の登場人物の強さ（1:弱い-100:強い）", },
    {"prompt": "生き物の強さ（1:弱い-100:強い）", },
    {"prompt": "アニメ・漫画のキャラの強さ（1:弱い-100:強い）", },
    {"prompt": "ゲームキャラの強さ（モンスター含む）（1:弱い-100:強い）", },
    {"prompt": "強そうな言葉（漢字、熟語など）（1:弱そう-100:強そう）", },
    {"prompt": "強そうな効果音（創作OK）（1:弱そう-100:強そう）", },
    {"prompt": "有名人の年収・資産（1:貧乏-100:金持ち）", },
    {"prompt": "重そうなもの（1:軽い-100:重い）", },
    {"prompt": "ボードゲームの（物理的な）重さ（1:軽い-100:重い）", },
    {"prompt": "食べ物のカロリー（1:低カロリー-100:高カロリー）", },
    {"prompt": "やわらかそうなもの（1:かたい-100:やわらかい）", },
    {"prompt": "カッコいいセリフ（1:カッコ悪い-100:カッコいい）", },
    {"prompt": "カッコいい苗字・名前（1:平凡-100:カッコいい）", },
    {"prompt": "かわいいもの（1:かわいくない-100:かわいい）", },
    {"prompt": "小学生が好きな言葉（1:好きじゃない-100:好き）", },
    {"prompt": "中高生が好きな言葉（1:好きじゃない-100:好き）", },
    {"prompt": "人生で大切なもの・こと（1:どうでもいい-100:大切）", },
    {"prompt": "雪山で遭難したときにもっていたいもの（1:いらない-100:持っていたい）", },
    {"prompt": "地球観光に来た宇宙人にあげたいお土産（1:あげたくない-100:あげたい）", },
    {"prompt": "テンションが上がるもの・こと（1:上がらない-100:上がる）", },
    {"prompt": "時代遅れの言葉（1:そうでもない-100:時代遅れ）", },
    {"prompt": "オタクが喜ぶセリフ・設定（1:喜ばない-100:喜ぶ）", },
    {"prompt": "グッとくる仕草・行動（1:グッとこない-100:グッとくる）", },
    {"prompt": "結婚したい有名人（1:結婚したくない-100:結婚したい）", },
    {"prompt": "結婚したいキャラ（アニメ・漫画・ゲーム）（1:結婚したくない-100:結婚したい）", },
    {"prompt": "親になってほしいキャラ（アニメ・漫画・ゲーム）（1:なってほしくない-100:なってほしい）", },
    {"prompt": "ほしい特殊能力・武器（必殺技・道具）（1:いらない-100:ほしい）", },
    {"prompt": "便利なもの（1:不便-100:便利）", },
    {"prompt": "旅先ですることの人気（1:人気ない-100:人気ある）"},
    {"prompt": "白米に合いそうなもの（1:合わない-100:合う）"},
    {"prompt": "中学生になって考えよう カッコいいもの・こと（1:カッコわるい-100:カッコいい）"},
    {"prompt": "鳥肌が立つこと（1:少し立つ-100:超立つ）"},
    {"prompt": "1000円くらいまででできる楽しいこと（1:そこそこ-100:楽しい）"},
    {"prompt": "桃太郎になって考えよう 頼りになる家来（1:頼りにならない-100:頼りになる）"},
    {"prompt": "動物園にいる動物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "ふだん聞く言葉の頻度（1:あまり聞かない-100:よく聞く）"},
    {"prompt": "破壊力のある言葉（パワーワード）（1:破壊力ない-100:破壊力ある）"},
    {"prompt": "冷蔵庫になって考えよう 入れてほしいもの（1:入れてほしくない-100:入れてほしい）"},
    {"prompt": "行事の人気（1:人気ない-100:人気ある）"},
    {"prompt": "宝箱をあけて入ってたら嬉しいもの（1:嬉しくない-100:嬉しい）"},
    {"prompt": "幼稚園児になって考えよう テンションが上がるとき（1:上がらない-100:上がる）"},
    {"prompt": "上に乗ってみたい動物（1:乗りたくない-100:乗りたい）"},
    {"prompt": "商店街のくじの景品でランクが高いもの（1:低い-100:高い）"},
    {"prompt": "SNSを活用するにあたって大切なもの・こと（1:むしろダメ-100:大切）"},
    {"prompt": "夏に行きたい場所や国の人気（1:人気ない-100:人気ある）"},
    {"prompt": "「一生これしか食べられない」なら選びたい食べもの（1:選びたくない-100:選びたい）"},
    {"prompt": "猫になって考えよう 心地のいい場所（1:心地わるい-100:心地いい）"},
    {"prompt": "いい匂いのもの（1:わるい-100:いい）"},
    {"prompt": "強そうな5文字（1:弱そう-100:強そう）"},
    {"prompt": "芸人になって考えよう ヤバい罰ゲーム（1:ヤバくない-100:ヤバい）"},
    {"prompt": "コンビニで買える食べ物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "公園の石をどかしたとき、あったらビックリするもの（1:少しビックリ-100:超ビックリ）"},
    {"prompt": "小学生になって考えよう 嬉しいこと（1:嬉しくない-100:嬉しい）"},
    {"prompt": "明るいもの（1:明るくない-100:明るい）"},
    {"prompt": "探検家になって考えよう ワクワクする場所（1:ワクワクしない-100:ワクワクする）"},
    {"prompt": "寿司ネタの人気（1:人気ない-100:人気ある）"},
    {"prompt": "動物の特徴でほしいもの（1:ほしくない-100:ほしい）"},
    {"prompt": "お嬢様になって考えよう 優秀な執事（1:ポンコツ-100:優秀）"},
    {"prompt": "人からごちそうされたい食べ物（1:嬉しくない-100:嬉しい）"},
    {"prompt": "桃太郎の場面（お話のどのあたりか）（1:むかしむかし-100:めでたしめでたし）"},
    {"prompt": "能力者になって考えよう ハデに使えそうな脳力（1:地味-100:ハデ）"},
    {"prompt": "海の生き物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "冷蔵庫の中にあったらテンションが上がるもの（1:上がらない-100:上がる）"},
    {"prompt": "高校生になって考えよう 授業中、起きたら大変なこと（1:大変じゃない-100:大変）"},
    {"prompt": "写真を撮りたくなるもの（1:そうでもない-100:撮りたくなる）"},
    {"prompt": "どうしてもこれだけは許せないということ（1:許せなくはない-100:許せない）"},
    {"prompt": "幸せを感じること（1:感じない-100:感じる）"},
    {"prompt": "学校の先生に怒られそうなこと（1:怒られない-100:怒られる）"},
    {"prompt": "犬になって考えよう 嬉しいこと（1:嬉しくない-100:嬉しい）"},
    {"prompt": "よく行く場所（1:あまり行かない-100:よく行く）"},
    {"prompt": "思わず見てしまうメールのタイトル（1:見ない-100:見てしまう）"},
    {"prompt": "ボディビルダーになって考えよう 言われたいかけ声（1:言われたくない-100:言われたい）"},
    {"prompt": "生まれ変わったらなりたい動物（1:なりたくない-100:なりたい）"},
    {"prompt": "大人っぽい言動（1:子供っぽい-100:大人っぽい）"},
    {"prompt": "動画配信者にとって必要な能力・資質（1:あっちゃダメ-100:必要）"},
    {"prompt": "家族にしてもらったら嬉しいこと（1:嬉しくない-100:嬉しい）"},
    {"prompt": "侍になって考えよう 尽くしたいタイプの人（1:尽くしたくない-100:尽くしたい）"},
    {"prompt": "食べ物のやわらかさ（1:かたい-100:やわらかい）"},
    {"prompt": "突然の一日オフ。最高の過ごし方は？（1:最悪-100:最高）"},
    {"prompt": "先生になって考えよう 卒業式に言われて嬉しい言葉（1:嬉しくない-100:嬉しい）"},
    {"prompt": "幼いころにほしかったもの（1:そうでもない-100:ほしかった）"},
    {"prompt": "宇宙にいるときにやってみたい行動（1:やりたくない-100:やってみたい）"},
    {"prompt": "お笑い芸人にとって必要な能力・資質（1:あっちゃダメ-100:必要）"},
    {"prompt": "寝起きにしたいこと（1:したくない-100:したい）"},
    {"prompt": "変顔の度合い（実際にやる）（1:ふつう顔-100:変顔）"},
    {"prompt": "修学旅行生になって考えよう 行きたい旅行先（1:行きたくない-100:行きたい）"},
    {"prompt": "部屋の中にある大切なもの（1:大切ではない-100:大切）"},
    {"prompt": "痛い思い出（物理・精神どちらでも）（1:痛くない-100:痛い）"},
    {"prompt": "生きる上で大切なこと（1:あまり大切でない-100:大切）"},
    {"prompt": "美味しい食べ物（1:美味しくない-100:美味しい）"},
    {"prompt": "絶対に食べたくないもの（1:食べたくない-100:食べたい）"},
    {"prompt": "オススメの勉強法（1:オススメしない-100:オススメ）"},
    {"prompt": "屋外でしてみたいこと（1:したくない-100:したい）"},
    {"prompt": "一度は見ておきたい風景（1:見たくない-100:見ておきたい）"},
    {"prompt": "趣味にしていること（1:していない-100:している）"},
    {"prompt": "嫌な思い出（1:嫌ではない-100:嫌な思い出）"},
    {"prompt": "試験勉強で効果的な方法（1:効果がない-100:効果がある）"},
    {"prompt": "感動的な体験（1:感動しない-100:感動する）"},
    {"prompt": "体験してみたいアクティビティ（1:体験したくない-100:体験したい）"},
    {"prompt": "アニメ・漫画の人気（1:人気ない-100:人気ある）"},
    {"prompt": "なりたい有名人（1:なりたくない-100:なりたい）"},
    {"prompt": "鳥肌が立つこと（1:立たない-100:立つ）"},
    {"prompt": "写真を撮りたくなるもの（1:そうでもない-100:撮りたくなる）"},
    {"prompt": "生きる上で大切なもの・こと（1:むしろダメ-100:大切）"},
    {"prompt": "住みたい場所の人気（1:人気ない-100:人気ある）"},
    {"prompt": "武器にしたら強そうな日用品（1:弱そう-100:強そう）"},
    {"prompt": "ずっと見ていられるもの（1:見ていられない-100:見ていられる）"},
    {"prompt": "リーダーにとって必要な能力・資質（1:あっちゃダメ-100:必要）"},
    {"prompt": "童話の人気（1:人気ない-100:人気ある）"},
    {"prompt": "ほしい（手に入れたい）特殊能力・武器（必殺技・道具）（1:いらない-100:ほしい）"},
    {"prompt": "うっかり信じてしまいそうなウソ（1:少し信じそう-100:超信じそう）"},
    {"prompt": "映画の人気（1:人気ない-100:人気ある）"},
    {"prompt": "包まれたいもの（1:包まれたくない-100:包まれたい）"},
    {"prompt": "あったらおいしそうなアイスクリームの味（1:おいしくなさそう-100:おいしそう）"},
    {"prompt": "アスリートの人気（1:人気ない-100:人気ある）"},
    {"prompt": "なりたい（アニメ・漫画・ゲームの）キャラ（1:なりたくない-100:なりたい）"},
    {"prompt": "いい匂いのもの（1:わるい-100:いい）"},
    {"prompt": "疲れたときにしたいこと（1:したくない-100:したい）"},
    {"prompt": "SNSを活用するにあたって大切なもの・こと（1:むしろダメ-100:大切）"},
    {"prompt": "食べ物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "俳優の人気（男女問わず）（1:人気ない-100:人気ある）"},
    {"prompt": "おみやげにもらったら嬉しいもの（1:嬉しくない-100:嬉しい）"},
    {"prompt": "ガマンするのが難しいこと（1:少し難しい-100:超難しい）"},
    {"prompt": "お笑い芸人にとって必要な能力・資質（1:あっちゃダメ-100:必要）"},
    {"prompt": "重そうなもの（1:軽い-100:重い）"},
    {"prompt": "歴史上の人物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "幼い頃に憧れたもの（1:少し憧れた-100:超憧れた）"},
    {"prompt": "家にある便利なもの（1:便利じゃない-100:便利）"},
    {"prompt": "歌・曲の人気（1:人気ない-100:人気ある）"},
    {"prompt": "メーカー（ブランド）の人気（1:人気ない-100:人気ある）"},
    {"prompt": "寝起きにしたいこと（1:したくない-100:したい）"},
    {"prompt": "聞こえてきたら嬉しい音（1:嬉しくない-100:嬉しい）"},
    {"prompt": "中学生になって考えよう カッコいいもの・こと（1:カッコわるい-100:カッコいい）"},
    {"prompt": "記念日のプレゼントの人気（1:人気ない-100:人気ある）"},
    {"prompt": "旅行したい国の人気（1:人気ない-100:人気ある）"},
    {"prompt": "上に乗ってみたい動物（1:乗りたくない-100:乗りたい）"},
    {"prompt": "小学生になって考えよう 嬉しいこと（1:嬉しくない-100:嬉しい）"},
    {"prompt": "悪役の人気（実在・非実在問わず）（1:人気ない-100:人気ある）"},
    {"prompt": "かわいいもの（1:かわいくない-100:かわいい）"},
    {"prompt": "1人でやるにはハードルが高いこと（1:低い-100:高い）"},
    {"prompt": "仕事をする上で必要な能力・資質（1:あっちゃダメ-100:必要）"},
    {"prompt": "猫になって考えよう 心地のいい場所（1:心地わるい-100:心地いい）"},
    {"prompt": "生き物の大きさ（1:小さい-100:大きい）"},
    {"prompt": "やわらかそうなもの（1:かたい-100:やわらかい）"},
    {"prompt": "5歳児が言ったらビックリする言葉（1:少しビックリ-100:超ビックリ）"},
    {"prompt": "公園の石をどかしたとき、あったらビックリするもの（1:少しビックリ-100:超ビックリ）"},
    {"prompt": "地球最後の日に頼りになりそうなもの（1:少し頼りになる-100:超頼りになる）"},
    {"prompt": "よく行く場所（1:あまり行かない-100:よく行く）"},
    {"prompt": "飲み物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "宝箱をあけて入ってたら嬉しいもの（1:嬉しくない-100:嬉しい）"},
    {"prompt": "もしあったら参加してみたいお祭りの特徴（1:少し参加したい-100:超参加したい）"},
    {"prompt": "おもちゃの人気（1:人気ない-100:人気ある）"},
    {"prompt": "眠くなるもの（1:目が覚める-100:眠くなる）"},
    {"prompt": "砂漠で遭難したときにほしいもの（1:いらない-100:ほしい）"},
    {"prompt": "タイムマシンで行ってみたい時代と場所（1:少し行きたい-100:超行きたい）"},
    {"prompt": "魔王になって考えよう こんな勇者はイヤだ（1:余裕-100:イヤだ）"},
    {"prompt": "言われたら嬉しい言葉（1:どうでもいい-100:嬉しい）"},
    {"prompt": "乗り物の人気（1:人気ない-100:人気ある）"},
    {"prompt": "お尻から出てきたらビックリするもの（1:少しビックリ-100:超ビックリ）"},
    {"prompt": "人からごちそうされたい食べ物（1:嬉しくない-100:嬉しい）"},
    {"prompt": "科学者になって考えよう 発明したいもの・こと（1:発明したくない-100:発明したい）"},
    {"prompt": "冷たくて食べられそうなもの（1:食べたくない-100:食べたい）"},
    {"prompt": "勇者にとって必要な能力・資質（1:あっちゃダメ-100:必要）"},
    
];

let usedPrompts = [];
let isHidden = false;
let roundCounter = 1;
let players = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', nextRound);
document.getElementById('endBtn').addEventListener('click', endGame);
document.getElementById('toggleHideBtn').addEventListener('click', toggleHide);
document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);

function startGame() {
    showNextPrompt();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    document.getElementById('toggleHideBtn').style.display = 'inline-block';
    updateRoundCounter();
}

function updateRoundCounter() {
    document.getElementById('roundCounter').textContent = `${roundCounter} 回目`;
}

function nextRound() {
    roundCounter++;
    updateRoundCounter();
    showNextPrompt();
}

function showNextPrompt() {
    if (prompts.length === 0) {
        alert('全部のお題使ったで');
        return;
    }

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const selectedPrompt = prompts.splice(randomIndex, 1)[0];
    usedPrompts.push(selectedPrompt);

    document.getElementById('prompt').textContent = selectedPrompt.prompt;

    updateVisibility();
}

function endGame() {
    if (confirm('ゲームおわる？')) {
        document.getElementById('prompt').textContent = '';
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('endBtn').style.display = 'none';
        document.getElementById('toggleHideBtn').style.display = 'none';
        prompts.push(...usedPrompts);
        usedPrompts = [];
        isHidden = false;
        updateVisibility();
        roundCounter = 1;
        updateRoundCounter();
        players = [];
        updateScoreboard();
    }
}

// お題の表示/非表示を切り替え
function toggleHide() {
    isHidden = !isHidden;
    const promptContainer = document.getElementById('promptContainer');
    const hiddenImage = document.getElementById('hiddenImage');
    
    if (isHidden) {
        promptContainer.querySelectorAll('p').forEach(p => p.style.display = 'none');
        hiddenImage.style.display = 'block';
        document.getElementById('toggleHideBtn').textContent = '表示する';
    } else {
        promptContainer.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
        });
        hiddenImage.style.display = 'none';
        document.getElementById('toggleHideBtn').textContent = '隠す';
    }
}

function updateVisibility() {
    const elements = ['prompt'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.style.visibility = isHidden ? 'hidden' : 'visible';
    });
    document.getElementById('toggleHideBtn').textContent = isHidden ? '表示する' : '隠す';
}

function addPlayer() {
    const playerName = prompt("あんたはどこぞのだれや？:");
    if (playerName) {
        players.push({ name: playerName, score: 0 });
        updateScoreboard();
    }
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'scoreboard-item';
        playerDiv.innerHTML = `
            <span>${player.name}　:　</span>
            <span id="score-${index}">${player.score}</span>
            <button onclick="addPoint(${index})">+1</button>
            <button onclick="subtractPoint(${index})">-1</button>
            <button onclick="removePlayer(${index})">削除</button>
        `;
        scoreboard.appendChild(playerDiv);
    });
}

function removePlayer(playerIndex) {
    if (confirm(`${players[playerIndex].name} をほんまに消すんか？`)) {
        players.splice(playerIndex, 1);
        updateScoreboard();
    }
}

function addPoint(playerIndex) {
    players[playerIndex].score++;
    updateScoreboard();
}

function subtractPoint(playerIndex) {
    players[playerIndex].score = Math.max(0, players[playerIndex].score - 1);
    updateScoreboard();
}
