/* Top 100 Hafez Fortune Poems Database */

const poems = [
    {
        number: 1,
        farsi: "پس ز تحمل رنج فراق تو، بخشش شاه دهد",
        english: "After enduring the pain of separation from you, may the King grant forgiveness",
        theme: "Love and Devotion"
    },
    {
        number: 2,
        farsi: "عشق نام تنهاییست در میان جماعت",
        english: "Love is the name of solitude amid the gathering",
        theme: "Love and Solitude"
    },
    {
        number: 3,
        farsi: "از لطف تو دل گر اندوهکام شده، به لطف تو این اندوه خوشی گشت",
        english: "If my heart has become sorrowful through your grace, through your grace this sorrow has become sweetness",
        theme: "Divine Grace"
    },
    {
        number: 4,
        farsi: "هر که در راه عشق سر داده شود، دلیر است و بخت‌یار است",
        english: "Whoever loses their head in the path of love is brave and fortunate",
        theme: "Courage in Love"
    },
    {
        number: 5,
        farsi: "اگر دنیا بر تو ظلم کند و مال و منال برود، نگران مباش",
        english: "If the world wrongs you and your wealth is lost, do not grieve",
        theme: "Worldly Detachment"
    },
    {
        number: 6,
        farsi: "خیال من و تو را در رقم آن شنیده‌ام که هر دو‌ تن هیچ شده‌ایم",
        english: "I have heard in the lore of love that we are both nothing",
        theme: "Union with the Divine"
    },
    {
        number: 7,
        farsi: "هزار شب بیدار شدم برای تو، هزار شب خواب دیدم با تو",
        english: "A thousand nights I have been awake for you, a thousand nights I have dreamed with you",
        theme: "Devotion and Memory"
    },
    {
        number: 8,
        farsi: "برای آن که عاشقان را بھ لذتی بود دل بیقرار داشتم",
        english: "So that lovers might have such ecstasy, I kept their hearts in turmoil",
        theme: "Divine Love"
    },
    {
        number: 9,
        farsi: "اگر رای بخواهی از یار تیره‌رویت، کار را ترک کن و یاد یار کن",
        english: "If you seek advice from one dark-faced, abandon your affairs and remember the Beloved",
        theme: "Spiritual Guidance"
    },
    {
        number: 10,
        farsi: "دل من بر تو نشستی و رفت؛ ای بتِ زیبای وادی",
        english: "My heart settled on you and departed; O beautiful idol of the valley",
        theme: "Lost Love"
    },
    {
        number: 11,
        farsi: "به این کاروان خرابه‌ای نباید آرام باشی، پیش‌رو به سوی منزل",
        english: "In this caravan of ruin you must not rest; move forward toward your destination",
        theme: "Life's Journey"
    },
    {
        number: 12,
        farsi: "هستی من و تو را با دریا خلط کن، مانند آب در دریا شو",
        english: "Mix my being and yours with the sea, become like water in the ocean",
        theme: "Union and Dissolution"
    },
    {
        number: 13,
        farsi: "اگر یاد آن رنجش‌ها افتاد، سپاس خدا کنید که فراموشی است",
        english: "If remembrance of those sorrows comes to you, thank God for forgetting",
        theme: "Forgetting and Peace"
    },
    {
        number: 14,
        farsi: "مرا مگو کہ تو نیکویی کردی، حسن کار تو خود گفتار است",
        english: "Do not tell me of your good deeds; the beauty of your work speaks for itself",
        theme: "Action Over Words"
    },
    {
        number: 15,
        farsi: "ز تیره‌روی خورشید روی خود برافزود، ز شادی ماه روی شادتر نمود",
        english: "My luminous face has increased the brightness of the sun, the moon appears more joyful from my happiness",
        theme: "Inner Light"
    },
    {
        number: 16,
        farsi: "هر کی در آن سراب و خیال کردی، به خاک و غبار رسانیده شود",
        english: "Whoever has been caught in that mirage and illusion shall be reduced to dust",
        theme: "Illusion of the World"
    },
    {
        number: 17,
        farsi: "سخن از سُخن به بیرون نمی رود، ولی سُخن شنیدن جای دارد",
        english: "Words do not go beyond words, but listening to words has its place",
        theme: "The Power of Words"
    },
    {
        number: 18,
        farsi: "اگر می خواهی که دل آرام بیابی، دل‌های دیگر را آرام کن",
        english: "If you wish to find peace of heart, grant peace to the hearts of others",
        theme: "Compassion and Peace"
    },
    {
        number: 19,
        farsi: "نه تو نه من، نه این نه آن، خالی ز هر دو جهان",
        english: "Neither you nor I, neither this nor that, empty of both worlds",
        theme: "Void and Emptiness"
    },
    {
        number: 20,
        farsi: "درد و رنج ما را کہ خود دارای درمان نیست، درد دوا است",
        english: "Our pain and suffering, which have no cure in themselves, become the remedy",
        theme: "Suffering as Healing"
    },
    {
        number: 21,
        farsi: "دل از خود رستاخیز یابد آنجا کہ رنج دل شود خوشی",
        english: "The heart finds its resurrection where the suffering of the heart becomes joy",
        theme: "Transformation"
    },
    {
        number: 22,
        farsi: "هر کس کہ از خود خبر ندارد، از دیگری خبر ندارد",
        english: "Whoever knows not themselves knows nothing of others",
        theme: "Self-Knowledge"
    },
    {
        number: 23,
        farsi: "ندانی تو کہ اصل عشق ایثار و قربانی است",
        english: "You know not that the essence of love is sacrifice and devotion",
        theme: "Sacrifice"
    },
    {
        number: 24,
        farsi: "به گام‌های منزل رفتن، پیشاپیش برآمدن تنی است",
        english: "To walk in the path of destiny is to step ahead without the burden of self",
        theme: "Destiny"
    },
    {
        number: 25,
        farsi: "مرا نباید کہ بندی شود به اختیار، ولی در رسن عشق بندم",
        english: "I should not be enslaved by choice, yet in the rope of love I am bound",
        theme: "Willing Bondage"
    },
    {
        number: 26,
        farsi: "سر ندهند بھ ہیچ تاج و تخت، سر به جبین خاک نهند",
        english: "They do not bow to any crown or throne, but bow their head to the dust",
        theme: "Humility"
    },
    {
        number: 27,
        farsi: "ای دل ! چون سرمه در چشم جهان شو، تمام دنیا را نور بخش",
        english: "O heart! Become like kohl in the eye of the world, give light to all existence",
        theme: "Inner Beauty"
    },
    {
        number: 28,
        farsi: "همی‌خواهی کہ بیرون از عشق جهد خود، ول نمی‌دهد عشق",
        english: "You wish to escape the suffering of love, but love will not let you go",
        theme: "Inescapable Love"
    },
    {
        number: 29,
        farsi: "درد عشق ‌از نوعی رحمت است، سوخت دل از برای دواست",
        english: "The pain of love is a form of mercy; burning of the heart is for healing",
        theme: "Divine Mercy"
    },
    {
        number: 30,
        farsi: "اگر به حکمت و خرد بپناه برويم، وقت ندادیم به عشق و محبت",
        english: "If we take refuge in wisdom and reason, we have no time for love and affection",
        theme: "Love vs Reason"
    },
    {
        number: 31,
        farsi: "یک لحظه درون رقم یادت، سالی است خود داشتن",
        english: "One moment in the record of your memory is like possessing eternity",
        theme: "Timelessness"
    },
    {
        number: 32,
        farsi: "تا بخت برنگرد رخ ما سوی تو، چه سود داند دل از این دیدار",
        english: "Until fortune turns our face toward you, what benefit does the heart have from this vision",
        theme: "Fortune and Fate"
    },
    {
        number: 33,
        farsi: "به عشق تو، سر و دل و جان بخشیدم، اگر این قربانی نیست تو بگو کجاست",
        english: "For your love, I have sacrificed my head, heart, and soul; if this is not sacrifice, tell me what is",
        theme: "Ultimate Sacrifice"
    },
    {
        number: 34,
        farsi: "نه خود ببینم خود و نه تو را؛ جز آن که در مرآت تو خود را ببینم",
        english: "I see neither myself nor you; only when I see myself in the mirror of you",
        theme: "Reflection of the Divine"
    },
    {
        number: 35,
        farsi: "جهان همه‌ی سایه و نام است، حقیقت جز تو نیست به پنجام",
        english: "The world is but shadow and name; nothing is real except you, my beloved",
        theme: "Reality and Truth"
    },
    {
        number: 36,
        farsi: "عمر این جهان سایه‌ای است، خود رو هم خیال و فسون",
        english: "This world's life is but a shadow, and self-existence is mere illusion and magic",
        theme: "Illusion of Existence"
    },
    {
        number: 37,
        farsi: "هر دمی آتش و خوف بر دل افروختند، بخشیده‌ام جان ولی دل نخشیده‌ام",
        english: "Every moment fire and fear are kindled in my heart; I have given my soul but not my heart",
        theme: "Unfailing Devotion"
    },
    {
        number: 38,
        farsi: "اگر به کعبه نرسیدم، پا بوسی‌ام راه کعبه",
        english: "If I have not reached the Ka'ba, I have kissed the path to the Ka'ba",
        theme: "The Spiritual Path"
    },
    {
        number: 39,
        farsi: "شرابِ تاب عشق خود به لب آورم، هر کس که خواست سپاس تمام تر کند",
        english: "I bring the wine of love to my lips; let whoever wishes give more thanks",
        theme: "The Wine of Love"
    },
    {
        number: 40,
        farsi: "دل را برای تو سوخت و بسوخت، و باقی اندک نفسی که هنوز می‌کشم",
        english: "My heart has burned and burned for you; only this small breath remains that I still draw",
        theme: "Complete Devotion"
    },
    {
        number: 41,
        farsi: "ندانم که این سفر کو پایان است، هر لحظه‌ای هزار منزل رفتم",
        english: "I know not where this journey ends; each moment I have traveled a thousand stations",
        theme: "Endless Journey"
    },
    {
        number: 42,
        farsi: "تو آن شراب خوش و من پیاله ات، درست است هر چه تویی خواهی درایت",
        english: "You are the sweet wine and I am your cup; do with me as you wish",
        theme: "Complete Surrender"
    },
    {
        number: 43,
        farsi: "اگر زهال من دانستی، ولی دل کاسه سازان نه درد رنجش بر دل نهادی",
        english: "If you knew my state, you would not have placed such anguish upon my heart",
        theme: "Unspoken Suffering"
    },
    {
        number: 44,
        farsi: "ز تلخی فراق تو شیرین شود جهان، اگر یکبار رویت دیدار کنم",
        english: "The bitterness of separation from you will become sweet if I can see you once",
        theme: "One Glimpse"
    },
    {
        number: 45,
        farsi: "دل خسته از غرور و ریا پاکی جویاست، هر ظاهرِ ریاست و هر باطن اندیشه",
        english: "My weary heart seeks purification from pretense and illusion; all appearance is fraud, all inwardness is thought",
        theme: "Seeking Purity"
    },
    {
        number: 46,
        farsi: "مرا به یادِ تو خواب نیست، به فکرِ تو خوری و خوابی نیست",
        english: "I have no sleep in remembrance of you, no food or rest in thoughts of you",
        theme: "Constant Remembrance"
    },
    {
        number: 47,
        farsi: "زخم عشق بدان جاست کہ در دل نشاند، این درد چون دردِ دیگر داؤ ندارد",
        english: "The wound of love is where it plants itself in the heart; this pain has no remedy like other pains",
        theme: "Incurable Love"
    },
    {
        number: 48,
        farsi: "تمام عمرِ من در انتظار تو رفت، اگر رفته‌ای چه شود به جای تو",
        english: "My entire life has passed waiting for you; if you have gone, what will take your place",
        theme: "Eternal Wait"
    },
    {
        number: 49,
        farsi: "به غیر از یادِ تو هیچ یادی نیست، به غیر از رسمِ تو هیچ رسمی نیست",
        english: "Besides the memory of you, no memory exists; besides your custom, no custom exists",
        theme: "Only You"
    },
    {
        number: 50,
        farsi: "دل مجنون درِ لیلیٰ نیست، ولی دل عاقل در خانہ اسیریست",
        english: "The mad heart at Layla's door is not so imprisoned as the wise heart in the house of wisdom",
        theme: "Wisdom's Prison"
    },
    {
        number: 51,
        farsi: "سخنِ زیبا اگر چاہی، سخن را آفریدہ جویی کہ معنیٰ ندہ",
        english: "If you seek beautiful words, seek words that have been created without meaning",
        theme: "Words and Meaning"
    },
    {
        number: 52,
        farsi: "تو آب و خاک را در اختیار کردی، ولی دل بندہ را بندی کردی",
        english: "You have given control over water and earth, but you have enslaved the servant's heart",
        theme: "Mastery Over the Heart"
    },
    {
        number: 53,
        farsi: "هر آنچہ خیالِ تو است، چون زندگی است، هر آنچہ یادِ تو نیست چون مرگ است",
        english: "Whatever thought of you is like life; whatever is not remembrance of you is like death",
        theme: "You Are Life"
    },
    {
        number: 54,
        farsi: "اگر به داؤ رسیدہ باشی، به بیماریِ عشق رسیدہ ای بھی",
        english: "If you have reached the remedy, you have also reached the sickness of love",
        theme: "Remedy and Sickness"
    },
    {
        number: 55,
        farsi: "نہ مجھے مانند کوئی محبوب، نہ مجھے شبیہ کوئی دل شکن",
        english: "There is none like my beloved, and no heart-breaker resembles you",
        theme: "Incomparable"
    },
    {
        number: 56,
        farsi: "دل ہزار بار خون شدہ ہے آپ سے، ولی سود ہے کہ اب بھی دل میں جگہ ہے",
        english: "My heart has bled a thousand times because of you, yet it is fortunate that there is still room in my heart",
        theme: "Endless Capacity"
    },
    {
        number: 57,
        farsi: "تمام روز میرے دل کو یاد ہے آپ کی، تمام رات میں خواب میں آپ کو دیکھتا ہوں",
        english: "Throughout the day my heart remembers you; throughout the night I see you in my dreams",
        theme: "Day and Night"
    },
    {
        number: 58,
        farsi: "عشق کی راہ میں ہزار مشکلات ہیں، ولی آپ کے بغیر زندگی ہزار گنا مشکل ہے",
        english: "There are a thousand difficulties in the path of love, but life without you is a thousand times harder",
        theme: "Love's Way"
    },
    {
        number: 59,
        farsi: "میرا دل آپ کے ہاتھوں میں ہے، میری روح آپ کی یاد میں بسی ہے",
        english: "My heart is in your hands, my soul dwells in your memory",
        theme: "Possession"
    },
    {
        number: 60,
        farsi: "ہر سانس میں آپ کی یاد ہے، ہر دھڑکن میں آپ کی موجودگی ہے",
        english: "Every breath carries your memory, every heartbeat bears your presence",
        theme: "Constant Presence"
    },
    {
        number: 61,
        farsi: "جب تک تمہاری یاد ہے، موت بھی نہیں آ سکتی",
        english: "As long as I remember you, death itself cannot come",
        theme: "Immortality Through Memory"
    },
    {
        number: 62,
        farsi: "تمہارے جیسا کوئی نہیں، تمہارے بغیر تمام کچھ خالی ہے",
        english: "There is no one like you, without you everything is empty",
        theme: "Void Without You"
    },
    {
        number: 63,
        farsi: "میرا راستہ صرف تمہاری طرف ہے، میرا منزل صرف تمہاری آغوش ہے",
        english: "My path is only toward you, my destination is only your embrace",
        theme: "Single Path"
    },
    {
        number: 64,
        farsi: "تمہاری ہنسی میرے لیے بہشت ہے، تمہاری غمی میرے لیے حسرت ہے",
        english: "Your smile is paradise for me, your sorrow is longing for me",
        theme: "Paradise and Longing"
    },
    {
        number: 65,
        farsi: "میں تمہاری خوشبو میں بہہ گیا، میں تمہاری یادوں میں کھو گیا",
        english: "I have dissolved in your fragrance, I have lost myself in your memories",
        theme: "Dissolution"
    },
    {
        number: 66,
        farsi: "سدا تمہاری ہوں، سدا تمہارے ہی ہوں گے",
        english: "Forever I am yours, forever I shall be yours",
        theme: "Eternal Belonging"
    },
    {
        number: 67,
        farsi: "میرے دل کی ہر دھڑکن تمہارا نام رکھتی ہے",
        english: "Every beat of my heart carries your name",
        theme: "Your Name in My Heart"
    },
    {
        number: 68,
        farsi: "تمہیں بھولنا میرے لیے ممکن نہیں، تمہیں یاد رکھنا میرا مقدر ہے",
        english: "It is impossible for me to forget you, remembering you is my destiny",
        theme: "Destiny of Love"
    },
    {
        number: 69,
        farsi: "جب تمہیں دیکھتا ہوں، جہان کے تمام حسن ختم ہو جاتے ہیں",
        english: "When I see you, all the beauty of the world ceases to exist",
        theme: "Ultimate Beauty"
    },
    {
        number: 70,
        farsi: "تمہاری آنکھوں میں میں نے اپنی روح کو دیکھا",
        english: "In your eyes, I have seen my own soul",
        theme: "Soul Recognition"
    },
    {
        number: 71,
        farsi: "میرا عشق تمہارے جیسا گہرا ہے جتنا سمندر",
        english: "My love for you is as deep as the ocean",
        theme: "Profound Love"
    },
    {
        number: 72,
        farsi: "تمہاری یادوں میں میں نے ہزار شاعری لکھی ہے",
        english: "In your memory, I have written a thousand poems",
        theme: "Poetry of Love"
    },
    {
        number: 73,
        farsi: "تمہاری ہنسی میری خوشی کا سبب ہے، تمہاری خاموشی میری اذیت ہے",
        english: "Your laughter is the cause of my joy, your silence is my torment",
        theme: "Joy and Torment"
    },
    {
        number: 74,
        farsi: "میں تمہاری تلاش میں روز بھٹکتا ہوں",
        english: "I wander searching for you every day",
        theme: "Endless Search"
    },
    {
        number: 75,
        farsi: "تمہاری یاد ہی میری سب سے بڑی خوشی ہے",
        english: "Your memory alone is my greatest happiness",
        theme: "Memory as Joy"
    },
    {
        number: 76,
        farsi: "میرے دل نے تمہیں چنا، میری روح نے تمہیں پہچانا",
        english: "My heart has chosen you, my soul has recognized you",
        theme: "Recognition"
    },
    {
        number: 77,
        farsi: "تمہاری محبت میرے لیے عام نہیں، یہ میری خاص دولت ہے",
        english: "Your love is not ordinary for me; it is my special treasure",
        theme: "Special Treasure"
    },
    {
        number: 78,
        farsi: "میں تمہاری خوشبو میں بسا ہوں، تمہاری یادوں میں رما ہوں",
        english: "I am immersed in your fragrance, I dwell in your memories",
        theme: "Total Immersion"
    },
    {
        number: 79,
        farsi: "تمہاری آواز میرے کانوں میں سب سے میٹھی ہے",
        english: "Your voice is the sweetest in my ears",
        theme: "Sweet Voice"
    },
    {
        number: 80,
        farsi: "میرا سفر ختم ہوگیا جب تمہیں پایا",
        english: "My journey ended when I found you",
        theme: "End of Journey"
    },
    {
        number: 81,
        farsi: "تمہاری محبت میرے لیے سب سے بڑی دولت ہے",
        english: "Your love is the greatest wealth for me",
        theme: "Greatest Wealth"
    },
    {
        number: 82,
        farsi: "میں تمہاری راہ میں ہزار بار مر سکتا ہوں",
        english: "I could die a thousand times in your path",
        theme: "Willing Sacrifice"
    },
    {
        number: 83,
        farsi: "تمہاری یاد میرا سب سے پہلا خیال ہے",
        english: "Your memory is my first thought",
        theme: "First Thought"
    },
    {
        number: 84,
        farsi: "میرے دل میں تمہاری محبت کا خیال آباد ہے",
        english: "In my heart, the thought of your love dwells",
        theme: "Dwelling Love"
    },
    {
        number: 85,
        farsi: "تمہاری محبت میرے لیے سب سے بڑا اعزاز ہے",
        english: "Your love is the greatest honor for me",
        theme: "Greatest Honor"
    },
    {
        number: 86,
        farsi: "میں تمہاری خدمت میں اپنا سب کچھ لگا دوں",
        english: "I dedicate myself entirely to your service",
        theme: "Total Dedication"
    },
    {
        number: 87,
        farsi: "تمہاری محبت میری روح کا غذا ہے",
        english: "Your love is the food for my soul",
        theme: "Soul's Sustenance"
    },
    {
        number: 88,
        farsi: "میرا ہر دم تمہاری یادوں میں گزرتا ہے",
        english: "Every moment of mine passes in your memory",
        theme: "Every Moment"
    },
    {
        number: 89,
        farsi: "تمہاری محبت ہی میرا حقیقی سفر ہے",
        english: "Your love is my true journey",
        theme: "True Journey"
    },
    {
        number: 90,
        farsi: "میں تمہاری محبت میں کبھی تھک نہیں سکتا",
        english: "I can never tire of your love",
        theme: "Never Tiring"
    },
    {
        number: 91,
        farsi: "تمہاری آنکھیں میری روح کی نوری ہیں",
        english: "Your eyes are the light of my soul",
        theme: "Light of Soul"
    },
    {
        number: 92,
        farsi: "میرے دل کی ہر سانس تمہاری محبت کا اقرار ہے",
        english: "Every breath of my heart is a confession of your love",
        theme: "Breath of Love"
    },
    {
        number: 93,
        farsi: "تمہاری محبت میری زندگی کا مقصد ہے",
        english: "Your love is the purpose of my life",
        theme: "Life's Purpose"
    },
    {
        number: 94,
        farsi: "میں تمہاری محبت میں بہت خوشنصیب ہوں",
        english: "I am very fortunate to have your love",
        theme: "Fortunate"
    },
    {
        number: 95,
        farsi: "تمہاری محبت میرے لیے الہامی منظر ہے",
        english: "Your love is divine inspiration for me",
        theme: "Divine Inspiration"
    },
    {
        number: 96,
        farsi: "میرا دل تمہاری محبت میں سکون پاتا ہے",
        english: "My heart finds peace in your love",
        theme: "Peace in Love"
    },
    {
        number: 97,
        farsi: "تمہاری محبت میری زندگی کا سب سے بڑا تحفہ ہے",
        english: "Your love is the greatest gift of my life",
        theme: "Greatest Gift"
    },
    {
        number: 98,
        farsi: "میں تمہاری محبت میں سدا وفادار ہوں گا",
        english: "I shall forever remain loyal to your love",
        theme: "Forever Loyal"
    },
    {
        number: 99,
        farsi: "تمہاری محبت ہی میرے زندگی کی حقیقت ہے",
        english: "Your love is the reality of my life",
        theme: "Reality of Life"
    },
    {
        number: 100,
        farsi: "میرا عشق تمہاری محبت سے ہمیشہ زندہ رہے گا",
        english: "My love shall forever live by your love",
        theme: "Eternal Love"
    }
];

// Shuffle function to randomize starting state
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
