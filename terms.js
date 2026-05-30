/* ===========================================================================
   茶葉感官審評術語資料庫（依 GB/T 14487-2017，已轉繁體中文）
   結構：
     TERMS.common[維度]            → 茶類通用術語
     TERMS.category[茶類鍵][維度]  → 各茶類專用術語
     TERMS.taiwan[茶類鍵][維度]    → 台灣常見特性術語（補充）
   維度鍵：shape 形狀 / dryColor 乾茶色澤 / soupColor 湯色 /
           aroma 香氣 / taste 滋味 / leaf 葉底
   茶類鍵：green 綠茶 / white 白茶 / yellow 黃茶 /
           oolong 青茶(烏龍) / black 紅茶 / dark 黑茶
   每個術語 = { t:術語, e:英文, d:釋義 }
   要新增/修改術語，直接照同樣格式編輯即可。
   =========================================================================== */
window.TERMS = {

common: {
  shape: [
    {t:"顯毫",e:"slightly tippy",d:"有茸毛的茶條比例高。"},
    {t:"多毫",e:"fairly tippy",d:"有茸毛的茶條比例較高，程度比顯毫低。"},
    {t:"披毫",e:"tippy",d:"茶條布滿茸毛。"},
    {t:"鋒苗",e:"tip",d:"芽葉細嫩，緊結有銳度。"},
    {t:"身骨",e:"density",d:"茶條輕重，也指單位體積的重量。"},
    {t:"重實",e:"heavy",d:"身骨重，茶在手中有沉重感。"},
    {t:"輕飄",e:"light",d:"身骨輕，茶在手中份量很輕。"},
    {t:"勻整",e:"even",d:"上中下三段茶的粗細、長短、大小較一致，比例適當，無脫檔現象。（勻齊、勻稱同義）"},
    {t:"勻淨",e:"neat",d:"勻齊而潔淨，不含梗朴及其他夾雜物。"},
    {t:"脫檔",e:"uneven",d:"上下段茶多、中段茶少；或上段茶少、下段茶多，三段茶比例不當。"},
    {t:"挺直",e:"straight",d:"茶條不曲不彎。"},
    {t:"彎曲",e:"bent / curved",d:"不直，呈鉤狀或弓狀。（鉤曲同義）"},
    {t:"平伏",e:"flat and even",d:"茶葉在盤中相互緊貼，無鬆起架空現象。"},
    {t:"細緊",e:"wiry",d:"茶葉細嫩，條索細長緊捲而完整，鋒苗好。"},
    {t:"緊秀",e:"tight and slender",d:"茶葉細嫩，緊細秀長，顯鋒苗。"},
    {t:"挺秀",e:"tender and straight",d:"茶葉細嫩，造型好，挺直秀氣尖削。"},
    {t:"緊結",e:"tight and heavy",d:"茶條捲緊而重實；緊壓茶壓製密度高。"},
    {t:"緊直",e:"tight and straight",d:"茶條捲緊而直。"},
    {t:"緊實",e:"tight",d:"茶條捲緊，身骨較重實；緊壓茶壓製密度適度。"},
    {t:"肥壯",e:"fat and bold",d:"芽葉肥嫩身骨重。（碩壯同義）"},
    {t:"壯實",e:"sturdy",d:"尚肥大，身骨較重實。"},
    {t:"粗實",e:"coarse and bold",d:"茶葉嫩度較差，形粗大尚結實。"},
    {t:"粗壯",e:"coarse and sturdy",d:"條粗大而壯實。"},
    {t:"粗鬆",e:"coarse and loose",d:"嫩度差，形狀粗大而鬆散。"},
    {t:"鬆條",e:"loose",d:"茶條捲緊度較差。（鬆泡同義）"},
    {t:"捲曲",e:"curly",d:"茶條緊捲呈螺旋狀或環狀。"},
    {t:"盤花",e:"spiral",d:"先將茶葉加工揉捻成條形再炒製成圓形或橢圓形的顆粒。"},
    {t:"細圓",e:"fine round",d:"顆粒細小圓緊，嫩度好，身骨重實。"},
    {t:"圓結",e:"round and tight",d:"顆粒圓而緊結重實。"},
    {t:"圓整",e:"round and uniform",d:"顆粒圓而整齊。"},
    {t:"圓實",e:"round and heavy",d:"顆粒圓而稍大，身骨較重實。"},
    {t:"粗圓",e:"coarse and round",d:"茶葉嫩度較差，顆粒稍粗大尚成圓。"},
    {t:"粗扁",e:"coarse and flat",d:"茶葉嫩度差，顆粒粗鬆帶扁。"},
    {t:"團塊",e:"lumps of leaf",d:"顆粒大如蠶豆或荔枝核，多為嫩芽葉黏結而成，為條形或圓形茶加工有缺陷的乾茶外形。"},
    {t:"扁塊",e:"flat and lumpy",d:"結成扁圓形或不規則圓形帶扁的團塊。"},
    {t:"圓直",e:"round and straight",d:"茶條圓渾而挺直。（渾直同義）"},
    {t:"渾圓",e:"round",d:"茶條圓而緊結一致。"},
    {t:"扁平",e:"flat",d:"扁形茶外形扁坦平直。"},
    {t:"扁直",e:"flat and straight",d:"扁平挺直。"},
    {t:"鬆扁",e:"loose and flat",d:"茶條不緊而呈平扁狀。"},
    {t:"扁條",e:"flat strip-type leaf",d:"條形扁，欠渾圓。"},
    {t:"肥直",e:"fat and straight",d:"芽頭肥壯挺直。"},
    {t:"粗大",e:"large",d:"比正常規格大的茶。"},
    {t:"細小",e:"small",d:"比正常規格小的茶。"},
    {t:"短鈍",e:"short and blunt",d:"茶條折斷，無鋒苗。（短禿同義）"},
    {t:"短碎",e:"short and broken",d:"面張條短，下段茶多，欠勻整。"},
    {t:"鬆碎",e:"loose and broken",d:"條鬆而短碎。"},
    {t:"下腳重",e:"heavy lower parts",d:"下段中最小的篩號茶過多。"},
    {t:"爆點",e:"blister",d:"乾茶上的突起泡點。"},
    {t:"破口",e:"chop",d:"折、切斷口痕跡顯露。"},
    {t:"老嫩不勻",e:"mixed",d:"成熟葉與嫩葉混雜，條形與嫩度、葉色不一致。"}
  ],
  dryColor: [
    {t:"油潤",e:"bloom",d:"鮮活，光澤好。"},
    {t:"光潔",e:"smooth and clean",d:"茶條表面平潔，尚油潤發亮。"},
    {t:"枯燥",e:"dry",d:"乾枯無光澤。"},
    {t:"枯暗",e:"dull dry",d:"枯燥反光差。"},
    {t:"枯紅",e:"dry red",d:"色紅而枯燥。"},
    {t:"調勻",e:"even colour",d:"葉色均勻一致。"},
    {t:"花雜",e:"mixed",d:"葉色不一、形狀不一或多梗、朴等茶類夾雜物。"},
    {t:"翠綠",e:"jade green",d:"綠中顯青翠。"},
    {t:"嫩黃",e:"delicate yellow",d:"金黃中泛出嫩白色，為白化葉類茶、黃茶等乾茶、湯色和葉底特有色澤。"},
    {t:"黃綠",e:"yellowish green",d:"以綠為主，綠中帶黃。"},
    {t:"綠黃",e:"greenish yellow",d:"以黃為主，黃中泛綠。"},
    {t:"灰綠",e:"greyish green",d:"葉面色澤綠而稍帶灰白色。"},
    {t:"墨綠",e:"dark green",d:"色澤濃綠泛烏有光澤。（烏綠、蒼綠同義）"},
    {t:"暗綠",e:"dull green",d:"色澤綠而發暗，無光澤，品質次於烏綠。"},
    {t:"綠褐",e:"greenish auburn",d:"褐中帶綠。"},
    {t:"青褐",e:"blueish auburn",d:"褐中帶青。"},
    {t:"黃褐",e:"yellowish auburn",d:"褐中帶黃。"},
    {t:"灰褐",e:"greyish auburn",d:"色褐帶灰。"},
    {t:"棕褐",e:"brownish auburn",d:"褐中帶棕，常用於康磚、金尖茶的乾茶和葉底色澤。"},
    {t:"褐黑",e:"auburnish black",d:"烏中帶褐有光澤。"},
    {t:"烏潤",e:"black bloom",d:"烏黑而油潤。"}
  ],
  soupColor: [
    {t:"清澈",e:"clear",d:"清淨、透明、光亮。"},
    {t:"混濁",e:"suspension",d:"茶湯中有大量懸浮物，透明度差。"},
    {t:"沉澱物",e:"precipitate",d:"茶湯中沉於碗底的物質。"},
    {t:"明亮",e:"bright",d:"清淨反光強。"},
    {t:"暗",e:"dull",d:"反光弱。"},
    {t:"鮮亮",e:"shiny",d:"新鮮明亮。"},
    {t:"鮮豔",e:"bright",d:"鮮明豔麗，清澈明亮。"},
    {t:"深",e:"deep",d:"茶湯顏色深。"},
    {t:"淺",e:"light",d:"茶湯色澤淡。"},
    {t:"淺黃",e:"light yellow",d:"黃色較淺。"},
    {t:"杏黃",e:"apricot",d:"湯色黃稍帶淺綠。"},
    {t:"深黃",e:"deep yellow",d:"黃色較深。"},
    {t:"橙黃",e:"orange",d:"黃中微泛紅，似橘黃色，有深淺之分。"},
    {t:"橙紅",e:"orange red",d:"紅中泛橙色。"},
    {t:"深紅",e:"deep red",d:"紅較深。"},
    {t:"黃亮",e:"bright yellow",d:"黃而明亮，有深淺之分。"},
    {t:"黃暗",e:"dull yellow",d:"色黃反光弱。"},
    {t:"紅暗",e:"dull red",d:"色紅反光弱。"},
    {t:"青暗",e:"dull blue",d:"色青反光弱。"}
  ],
  aroma: [
    {t:"高香",e:"high aroma",d:"茶香優而強烈。"},
    {t:"高強",e:"high and intensive aroma",d:"香氣高，濃度大，持久。"},
    {t:"鮮爽",e:"fresh and brisk",d:"香氣新鮮愉悅。"},
    {t:"嫩香",e:"tend aroma",d:"嫩茶所特有的愉悅細膩的香氣。"},
    {t:"鮮嫩",e:"fresh and tender",d:"鮮爽帶嫩香。"},
    {t:"馥鬱",e:"fragrant and lasting",d:"香氣幽雅豐富，芬芳持久。"},
    {t:"濃鬱",e:"strong and lasting",d:"香氣豐富，芬芳持久。"},
    {t:"清香",e:"clean and refreshing",d:"清新純淨。"},
    {t:"清高",e:"clean and high",d:"清香高而持久。"},
    {t:"清鮮",e:"clean and fresh",d:"清香鮮爽。"},
    {t:"清長",e:"clean and lasting",d:"清而純正並持久的香氣。"},
    {t:"清純",e:"clean and pure",d:"清香純正。"},
    {t:"甜香",e:"sweet aroma",d:"香氣有甜感。"},
    {t:"板栗香",e:"chestnut aroma",d:"似熟栗子香。"},
    {t:"花香",e:"flowery aroma",d:"似鮮花的香氣，新鮮悅鼻，多為優質烏龍茶、紅茶之品種香，或烏龍茶做青適度的香氣。"},
    {t:"花蜜香",e:"flowery and honey aroma",d:"花香中帶有蜜糖香味。"},
    {t:"果香",e:"fruity aroma",d:"濃郁的果實熟透香氣。"},
    {t:"木香",e:"woody aroma",d:"茶葉粗老或冬茶後期，梗葉木質化，香氣中帶纖維氣味和甜感。"},
    {t:"地域香",e:"regional aroma",d:"特殊地域、土質栽培的茶樹，其鮮葉加工後產生的特有香氣，如岩香、高山香等。"},
    {t:"松煙香",e:"smoky pine aroma",d:"帶有松脂煙香。"},
    {t:"陳香",e:"aroma after aging",d:"茶質好、保存得當，陳化後具有的愉悅香氣，無雜、黴氣。"},
    {t:"純正",e:"pure and normal",d:"茶香純淨正常。"},
    {t:"平正",e:"normal",d:"茶香平淡，無異雜氣。"},
    {t:"香飄",e:"weak",d:"香浮而不持久。（虛香同義）"},
    {t:"欠純",e:"less pure",d:"香氣夾有其他的異雜氣。"},
    {t:"足火香",e:"sufficient fired aroma",d:"乾燥充分，火功飽滿。"},
    {t:"焦糖香",e:"caramel",d:"乾燥充足，火功高帶有糖香。"},
    {t:"高火",e:"high-fired aroma",d:"似鍋巴香，乾燥過程溫度高或時間長而產生，稍高於正常火功。"},
    {t:"老火",e:"over-fired aroma",d:"乾燥溫度過高或時間過長而產生的似烤黃鍋巴香，程度重於高火。"},
    {t:"焦氣",e:"burnt odour",d:"有較重的焦糊氣，程度重於老火。"},
    {t:"悶氣",e:"dull odour",d:"沉悶不爽。"},
    {t:"低",e:"weak",d:"低微，無粗氣。"},
    {t:"日曬氣",e:"sunshine odour",d:"茶葉受太陽光照射後，帶有日光味。"},
    {t:"青氣",e:"grass odour",d:"帶有青草或青葉氣息。"},
    {t:"鈍濁",e:"dull and tainted",d:"滯鈍不爽。"},
    {t:"青濁氣",e:"grassy and stunt",d:"氣味不清爽，多為雨水青、殺青未殺透或做青不當而產生的青氣和濁氣。"},
    {t:"粗氣",e:"harsh",d:"粗老葉的氣息。"},
    {t:"粗短氣",e:"harsh and coarse",d:"香短，帶粗老氣息。"},
    {t:"失風",e:"off flavor",d:"失去正常香氣特徵但程度輕於陳氣，多由乾燥後攤涼過久、暴露於空氣或受潮引起。"},
    {t:"陳氣",e:"stale odour",d:"茶葉存放中失去新茶香味，呈現不愉快的類似油脂氧化變質的氣味。"},
    {t:"酸餿氣",e:"sour odour",d:"含水量高、加工不當、變質而出現的不正常氣味，餿氣程度重於酸氣。"},
    {t:"劣異氣",e:"tainted odour",d:"加工或貯存不當產生的劣變氣息，或污染外來物質產生的氣息，如煙、焦、酸、餿、黴等。"}
  ],
  taste: [
    {t:"濃",e:"strong",d:"內含物豐富，收斂性強。"},
    {t:"厚",e:"thick",d:"內含物豐富，有黏稠感。"},
    {t:"醇",e:"mellow",d:"濃淡適中，口感柔和。"},
    {t:"滑",e:"smooth",d:"茶湯入口和吞嚥後順滑，無粗糙感。"},
    {t:"回甘",e:"sweet after taste",d:"茶湯飲後，舌根和喉部有甜感，並有滋潤的感覺。"},
    {t:"濃厚",e:"heavy and thick",d:"入口濃，收斂性強，回味有黏稠感。"},
    {t:"醇厚",e:"mellow and thick",d:"入口爽適，回味有黏稠感。"},
    {t:"濃醇",e:"heavy and mellow",d:"入口濃，有收斂性，回味爽適。"},
    {t:"甘醇",e:"mellow and sweet after taste",d:"醇而回甘。"},
    {t:"甘滑",e:"sweet and smooth",d:"滑中帶甘。"},
    {t:"甘鮮",e:"sweet and fresh",d:"鮮潔有回甘。"},
    {t:"甜醇",e:"sweet and mellow",d:"入口即有甜感，爽適柔和。"},
    {t:"甜爽",e:"sweet and brisk",d:"爽口而有甜味。"},
    {t:"鮮醇",e:"fresh and mellow",d:"鮮潔醇爽。"},
    {t:"醇爽",e:"mellow and brisk",d:"醇而鮮爽。"},
    {t:"清醇",e:"clean and mellow",d:"茶湯入口爽適，清爽柔和。"},
    {t:"醇正",e:"mellow and normal",d:"濃度適當，正常無異味。"},
    {t:"醇和",e:"mellow",d:"醇而和淡。"},
    {t:"平和",e:"neutral",d:"茶味和淡，無粗味。"},
    {t:"淡薄",e:"plain and thin",d:"茶湯內含物少，無雜味。"},
    {t:"濁",e:"tainted",d:"口感不順，茶湯中似有膠狀懸浮物或有雜質。"},
    {t:"澀",e:"astringent",d:"茶湯入口後，有厚舌阻滯的感覺。"},
    {t:"苦",e:"bitter",d:"茶湯入口有苦味，回味仍苦。"},
    {t:"粗味",e:"coarse",d:"粗糙滯鈍，帶木質味。"},
    {t:"青澀",e:"grassy and astringent",d:"澀而帶有生青味。"},
    {t:"青味",e:"grass taste",d:"青草氣味。"},
    {t:"青濁味",e:"grassy and tainted",d:"茶湯不清爽，帶青味和濁味，多為雨水青、曬青、做青不足或殺青不勻不透而產生。"},
    {t:"熟悶味",e:"steamed and overcooked",d:"茶湯入口不爽，帶有蒸熟或悶熟味。"},
    {t:"悶黃味",e:"dull and cooked flavor",d:"茶有悶黃軟熟氣味，多為殺青葉悶未及時攤開、揉捻偏長或包揉葉溫過高、定型偏長而引起。"},
    {t:"淡水味",e:"pale and watery",d:"茶湯濃度感不足，淡薄如水。"},
    {t:"高山韻",e:"high mountain flavor character",d:"高山茶所特有的香氣清高細膩、滋味豐厚飽滿的綜合體現。"},
    {t:"叢韻",e:"cong flavor character",d:"單株茶樹所體現的特有香氣和滋味，多為鳳凰單叢、武夷名叢或普洱大樹茶之香味特徵。"},
    {t:"陳醇",e:"stale and mellow",d:"茶質好、保存得當，陳化後具有的愉悅柔和滋味，無雜、黴味。"},
    {t:"高火味",e:"high heat fired flavor",d:"乾燥過程溫度高或時間長而產生，微帶烤黃的鍋巴味。"},
    {t:"老火味",e:"over fired taste",d:"溫度過高或時間過長產生的似烤焦黃鍋巴味，程度重於高火味。"},
    {t:"焦味",e:"burnt taste",d:"茶湯帶有較重的焦糊味，程度重於老火味。"},
    {t:"辛味",e:"pungent taste",d:"普洱原料多為夏暑雨水茶，因渥堆不足或無後熟陳化而產生的辛辣味。"},
    {t:"陳味",e:"stale taste",d:"茶葉存放中失去新茶香味，呈現不愉快的類似油脂氧化變質的味道。"},
    {t:"雜味",e:"mixed taste",d:"滋味混雜不清爽。"},
    {t:"黴味",e:"mould taste",d:"茶葉存放過程中水分過高導致真菌生長所散出的氣味。"},
    {t:"劣異味",e:"tainted taste",d:"加工或貯存不當產生的劣變味，或污染外來物質產生的味感，如煙、焦、酸、餿、黴等。"}
  ],
  leaf: [
    {t:"細嫩",e:"fine and tender",d:"芽頭多或葉子細小嫩軟。"},
    {t:"肥嫩",e:"fat and tender",d:"芽頭肥壯，葉質柔軟厚實。"},
    {t:"柔嫩",e:"soft and tender",d:"嫩而柔軟。"},
    {t:"柔軟",e:"soft",d:"手按如綿，按後貼伏盤底。"},
    {t:"肥亮",e:"fat and bright",d:"葉肉肥厚，葉色透明發亮。"},
    {t:"軟亮",e:"soft and bright",d:"嫩度適當或稍嫩，葉質柔軟，按後貼伏盤底，葉色明亮。"},
    {t:"勻",e:"even",d:"老嫩、大小、厚薄、整碎或色澤等均勻一致。"},
    {t:"雜",e:"uneven",d:"老嫩、大小、厚薄、整碎或色澤等不一致。"},
    {t:"硬",e:"hard",d:"堅硬、有彈性。"},
    {t:"嫩勻",e:"tender and even",d:"芽葉勻齊一致，嫩而柔軟。"},
    {t:"肥厚",e:"fat and thick",d:"芽或葉肥壯，葉肉厚。"},
    {t:"開展",e:"open",d:"葉張展開，葉質柔軟。（舒展同義）"},
    {t:"攤張",e:"matured spread leaf",d:"老葉攤開。"},
    {t:"青張",e:"blue leaf",d:"夾雜青色葉片。"},
    {t:"烏條",e:"dark and unopened",d:"葉底烏暗而不開展。"},
    {t:"粗老",e:"coarse",d:"葉質粗硬，葉脈顯露。"},
    {t:"皺縮",e:"shrink",d:"葉質老，葉面捲縮起皺紋。"},
    {t:"瘦薄",e:"thin",d:"芽頭瘦小，葉張單薄少肉。"},
    {t:"破碎",e:"broken",d:"斷碎、破碎葉片多。"},
    {t:"暗雜",e:"dull and mixed",d:"葉色暗沉、老嫩不一。"},
    {t:"硬雜",e:"hard and mixed",d:"葉質粗老、堅硬、多梗、色澤駁雜。"},
    {t:"焦斑",e:"burnt spots",d:"葉張邊緣、葉面或葉背有局部黑色或黃色灼傷斑痕。"}
  ]
},

category: {

  green: {
    shape: [
      {t:"纖細",e:"wiry and tender",d:"條索細如銅絲，為芽葉特別細小的碧螺春等茶之形狀特徵。"},
      {t:"捲曲如螺",e:"spiral",d:"條索捲緊後呈螺旋狀，為碧螺春等高檔捲曲形綠茶之造型。"},
      {t:"雀舌",e:"queshe",d:"細嫩芽頭略扁，形似小鳥舌頭。"},
      {t:"蘭花形",e:"orchard alike",d:"一芽二葉自然舒展，形似蘭花。"},
      {t:"鳳羽形",e:"feather alike",d:"芽葉有夾角似燕尾形狀。"},
      {t:"黃頭",e:"yellow lump",d:"葉質較老，顆粒粗鬆，色澤露黃。"},
      {t:"圓頭",e:"round lump",d:"條形茶中結成圓塊的茶，為條形茶中加工有缺陷的乾茶外形。"},
      {t:"扁削",e:"sharp and flat",d:"扁平而尖鋒顯露，扁茶邊緣如刀削過一樣齊整，不起絲毫皺摺，多為高檔扁形茶外形特徵。"},
      {t:"尖削",e:"sharp",d:"芽尖如劍鋒。"},
      {t:"光滑",e:"smooth",d:"茶條表面平潔油滑，光潤發亮。"},
      {t:"摺疊",e:"fold",d:"形狀不平呈皺摺疊狀。"},
      {t:"緊條",e:"tight",d:"扁形茶長寬比不當，寬度明顯小於正常值。"},
      {t:"狹長條",e:"narrow leaf",d:"扁形茶扁條過窄、過長。"},
      {t:"寬條",e:"broad leaf",d:"扁形茶長寬比不當，寬度明顯大於正常值。"},
      {t:"寬皺",e:"broad and shrink",d:"扁形茶扁條摺皺而寬鬆。"},
      {t:"渾條",e:"round leaf",d:"扁形茶的茶條不扁而呈渾圓狀。"},
      {t:"扁瘦",e:"flat and thin",d:"葉質瘦薄，扁而乾瘦。"},
      {t:"細直",e:"fine and straight",d:"細緊圓直、形似松針。"},
      {t:"茸毫密布",e:"fully tippy",d:"芽葉茸毫密密地覆蓋著茶條，為高檔碧螺春等多茸毫綠茶之外形。（茸毫披覆同義）"},
      {t:"茸毫遍布",e:"evenly tippy",d:"芽葉茸毫遮掩茶條，但覆蓋程度低於密布。"},
      {t:"脫毫",e:"tip off",d:"茸毫脫離芽葉，是碧螺春等多茸毫綠茶加工中有缺陷的乾茶外形。"}
    ],
    dryColor: [
      {t:"嫩綠",e:"delicate green",d:"淺綠嫩黃，富有光澤。為高檔綠茶乾茶、湯色和葉底色澤特徵。"},
      {t:"鮮綠豆色",e:"fresh mug bean color",d:"深翠綠似新鮮綠豆色，用於恩施玉露等細嫩型蒸青綠茶色澤。"},
      {t:"深綠",e:"deep green",d:"綠色較深。"},
      {t:"綠潤",e:"green bloom",d:"色綠，富有光澤。"},
      {t:"銀綠",e:"silvery green",d:"白色茸毛遮掩下的茶條，銀色中透出嫩綠，為茸毛顯露的高檔綠茶色澤特徵。"},
      {t:"糙米色",e:"brown rice colour",d:"色澤嫩綠微黃，光澤度好，為高檔獅峰龍井茶的色澤特徵。"},
      {t:"起霜",e:"silvery",d:"茶條表面帶灰白色，有光澤。"},
      {t:"露黃",e:"little yellow exposed",d:"面張含有少量黃朴、片及黃條。"},
      {t:"灰黃",e:"greyish yellow",d:"色黃帶灰。"},
      {t:"枯黃",e:"dry yellow",d:"色黃而枯燥。"},
      {t:"灰暗",e:"dull grey",d:"色深暗帶死灰色。"}
    ],
    soupColor: [
      {t:"綠豔",e:"brilliant green",d:"湯色鮮豔，似翠綠而微黃，清澈鮮亮。"},
      {t:"碧綠",e:"jade green",d:"綠中帶翠，清澈鮮豔。"},
      {t:"淺綠",e:"light green",d:"綠色較淡，清澈明亮。"},
      {t:"杏綠",e:"apricot green",d:"淺綠微黃，清澈明亮。"}
    ],
    aroma: [
      {t:"鮮靈",e:"fresh lovely",d:"花香新鮮充足，一嗅即有愉快之感。為高檔茉莉花茶的香氣。"},
      {t:"鮮濃",e:"fresh and heavy",d:"香氣物質含量豐富、持久，花香濃，但新鮮悅鼻程度不如鮮靈。"},
      {t:"鮮純",e:"fresh and pure",d:"茶香、花香純正、新鮮，花香濃度稍差。"},
      {t:"幽香",e:"gentle flowery aroma",d:"花香細膩、幽雅，柔和持久。"},
      {t:"純",e:"pure",d:"茶香或花香正常，無其他異雜氣。"},
      {t:"香薄",e:"weak aroma",d:"花香短促、薄弱，浮於表面，一嗅即逝。（香弱、香浮同義）"},
      {t:"透素",e:"tea aroma dominant",d:"花香薄弱，茶香突出。"},
      {t:"透蘭",e:"magnolia aroma showing",d:"茉莉花香中透露白蘭花香。"}
    ],
    taste: [
      {t:"粗淡",e:"harsh and thin",d:"茶味淡而粗糙，花香薄弱，為低級別茉莉花茶的滋味。"}
    ],
    leaf: [
      {t:"靛青",e:"indigo",d:"夾雜藍綠色芽葉，為紫芽種或部分夏秋茶的葉底特徵。（靛藍同義）"},
      {t:"紅梗紅葉",e:"red stalk and leaf",d:"莖葉泛紅，為綠茶品質弊病。"}
    ]
  },

  yellow: {
    shape: [
      {t:"梗葉連枝",e:"full shoot",d:"葉大梗長而相連。"},
      {t:"魚子泡",e:"scorch points",d:"乾茶上有魚籽大的突起泡點。"}
    ],
    dryColor: [
      {t:"金鑲玉",e:"jinxiangyu",d:"茶芽嫩黃、滿披金色茸毛，為君山銀針乾茶色澤特徵。"},
      {t:"金黃光亮",e:"golden bright",d:"芽葉色澤金黃，油潤光亮。"},
      {t:"褐黃",e:"auburn yellow",d:"黃中帶褐，光澤稍差。"},
      {t:"黃青",e:"yellowish blue",d:"青中帶黃。"}
    ],
    aroma: [
      {t:"鍋巴香",e:"rice crust aroma",d:"似鍋巴的香，為黃大茶的香氣特徵。"}
    ]
  },

  dark: {
    shape: [
      {t:"泥鰍條",e:"loach alike leaf",d:"茶條皺褶稍鬆略扁，形似曬乾泥鰍。"},
      {t:"皺摺葉",e:"shrink leaves",d:"葉片皺摺不成條。"},
      {t:"宿梗",e:"aged stalk",d:"老化的隔年茶梗。"},
      {t:"紅梗",e:"red stalk",d:"表皮棕紅色的木質化茶梗。"},
      {t:"青梗",e:"green stalk",d:"表皮青綠色，比紅梗較嫩的茶梗。"}
    ],
    dryColor: [
      {t:"豬肝色",e:"liver color",d:"紅面帶暗，似豬肝色。為普洱熟茶渥堆適度的乾茶及葉底色澤。"},
      {t:"褐紅",e:"auburn red",d:"紅中帶褐，為普洱熟茶渥堆正常之乾茶及葉底色澤，發酵程度略高於豬肝色。"},
      {t:"紅褐",e:"reddish auburn",d:"褐中帶紅，為普洱熟茶、陳年六堡茶正常之乾茶及葉底色澤。"},
      {t:"褐黑",e:"auburn black",d:"黑中帶褐。為陳年六堡茶的正常乾茶及葉底色澤，比黑褐色深。"},
      {t:"鐵黑",e:"iron black",d:"色黑似鐵。"},
      {t:"半筒黃",e:"semi yellow and black",d:"色澤花雜，葉尖黑色，柄端黃黑色。"},
      {t:"青黃",e:"blueish yellow",d:"黃中泛青，為原料後發酵不足所致。"}
    ],
    soupColor: [
      {t:"棕紅",e:"brownish red",d:"紅中泛棕，似咖啡色。"},
      {t:"棕黃",e:"brownish yellow",d:"黃中泛棕。"},
      {t:"栗紅",e:"chestnut red",d:"紅中帶深棕色。為陳年普洱生茶正常的湯色及葉底色澤。"},
      {t:"栗褐",e:"chestnut auburn",d:"褐中帶深棕色，似成熟栗殼色。為普洱熟茶正常的湯色及葉底色澤。"},
      {t:"紫紅",e:"purple red",d:"紅中泛紫。為陳年六堡茶或普洱茶的湯色特徵。"}
    ],
    aroma: [
      {t:"粗青氣",e:"green and harsh odour",d:"粗老葉的氣息與青葉氣息，為粗老曬青毛茶殺青不足所致。"},
      {t:"毛火氣",e:"fired aroma",d:"曬青毛茶中帶有類似烘炒青綠茶的烘炒香。"},
      {t:"堆味",e:"aroma by pile fermentation",d:"黑茶渥堆發酵產生的氣味。"}
    ],
    taste: [
      {t:"陳韻",e:"aged flavour",d:"優質陳年黑茶特有甘滑醇厚滋味的綜合體現。"},
      {t:"陳厚",e:"stale and thick",d:"經充分渥堆、陳化後，香氣純正，滋味甘而顯果味，多為南路邊茶之香味特徵。"},
      {t:"倉味",e:"tainted during storage",d:"普洱茶或六堡茶等後熟陳化工序未結束或儲存不當而產生的雜味。"}
    ]
  },

  oolong: {
    shape: [
      {t:"蜻蜓頭",e:"dragonfly head alike",d:"茶條葉端捲曲，緊結沉重，狀如蜻蜓頭。"},
      {t:"壯結",e:"bold",d:"茶條肥壯結實。"},
      {t:"壯直",e:"bold and straight",d:"茶條肥壯挺直。"},
      {t:"細結",e:"fine and tight",d:"顆粒細小緊結或條索捲緊細小結實。"},
      {t:"扭曲",e:"twisted",d:"茶條扭曲，葉端摺皺重疊。為閩北烏龍茶特有的外形特徵。"},
      {t:"尖梭",e:"spindle alike leaf",d:"茶條長而細瘦，葉柄窄小，頭尾細尖如菱形。"},
      {t:"粽葉蒂",e:"wide and thick stem",d:"乾茶葉柄寬、肥厚，如包粽子的箬葉葉柄，包揉後茶葉平伏，鐵觀音、水仙、大葉烏龍等品種有此特徵。"},
      {t:"白心尾",e:"white-end",d:"駐芽有白色茸毛包裹。"},
      {t:"葉背轉",e:"curled leaf",d:"葉片水平著生的鮮葉，經揉捻後，葉面順主脈向葉背捲曲。"}
    ],
    dryColor: [
      {t:"砂綠",e:"frog skin alike green",d:"似蛙皮綠，即綠中似帶砂粒點。"},
      {t:"青綠",e:"blueish green",d:"色綠而帶青，多為雨水青、露水青或做青走水不勻引起「滯青」而形成。"},
      {t:"烏褐",e:"black auburn",d:"色褐而泛烏，常為重做青烏龍茶或陳年烏龍茶之外形色澤。"},
      {t:"褐潤",e:"auburn bloom",d:"色褐而富光澤，為發酵充足、品質較好之烏龍茶色澤。"},
      {t:"鱔魚皮色",e:"eel skin alike",d:"乾茶色澤砂綠蜜黃，富有光澤，似鱔魚皮色，為水仙等品種特有色澤。"},
      {t:"象牙色",e:"ivory",d:"黃中呈赤白，為黃金桂、赤葉奇蘭、白葉奇蘭等特有的品種色。"},
      {t:"三節色",e:"three-segment colour",d:"茶條葉柄呈青綠或紅褐，中部呈烏綠或黃綠並帶鮮紅點，葉端呈朱砂紅或紅黃相間。"},
      {t:"香蕉色",e:"banana green",d:"葉色呈翠黃綠色，如剛成熟香蕉皮的顏色。"},
      {t:"明膠色",e:"gelatine bloom",d:"乾茶色澤油潤有光澤。"},
      {t:"芙蓉色",e:"cotton rose white",d:"在烏潤色澤上泛白色光澤，猶如覆蓋一層白粉。"},
      {t:"紅點",e:"red spots",d:"做青時葉中部細胞破損處，葉的紅邊經捲曲後呈現紅點，以鮮紅點品質為好，褐紅點品質稍次。"}
    ],
    soupColor: [
      {t:"蜜綠",e:"honey green",d:"淺綠略帶黃，似蜂蜜，多為輕做青烏龍茶之湯色。"},
      {t:"蜜黃",e:"honey yellow",d:"淺黃似蜂蜜色。"},
      {t:"綠金黃",e:"golden yellow with deep green",d:"金黃泛綠，為做青不足之表現。"},
      {t:"金黃",e:"golden yellow",d:"以黃為主，微帶橙黃，有淺金黃、深金黃之分。"},
      {t:"清黃",e:"clear yellow",d:"黃而清澈，比金黃色的湯色略淡。"},
      {t:"茶油色",e:"tea-seed oil yellow",d:"茶湯金黃明亮有濃度。"},
      {t:"青濁",e:"grassy and cloudy",d:"茶湯中帶綠色的膠狀懸浮物，為做青不足、揉捻重壓而造成。"}
    ],
    aroma: [
      {t:"粟香",e:"caramel aroma",d:"經中等火溫長時間烘焙而產生的如粟米的香氣。"},
      {t:"奶香",e:"milky aroma",d:"香氣清高細長，似奶香，多為成熟度稍嫩的鮮葉加工而形成。"},
      {t:"酵香",e:"fermentation aroma",d:"似食品發酵時散發的香氣，多由做青程度稍過度，或包揉過程未及時解塊散熱而產生。"},
      {t:"辛香",e:"pungent aroma",d:"香高有刺激性，微青辛氣味，俗稱線香，為梅占等品種香。"},
      {t:"黃悶氣",e:"fuggy odor",d:"悶濁氣，包揉時葉溫過高或定型過長悶積而生，也有因烘焙火溫偏低或攤焙太厚而引起。"},
      {t:"悶火",e:"fired fuggy odor",d:"烏龍茶烘焙後未適當攤涼而形成的一種令人不快的火氣。"},
      {t:"硬火",e:"over fired",d:"烘焙火溫偏高、時間偏短，攤涼不足即裝箱而產生的火氣。（熱火同義）"}
    ],
    taste: [
      {t:"巖韻",e:"Yan flavour",d:"武夷岩茶特有的地域風味。"},
      {t:"音韻",e:"Yin flavour",d:"鐵觀音所特有的品種香和滋味的綜合體現。"},
      {t:"粗濃",e:"coarse and heavy",d:"味粗而濃。"},
      {t:"酵味",e:"fermentation taste",d:"做青過度而產生的不良氣味，湯色常泛紅，葉底夾雜有暗紅張。"}
    ],
    leaf: [
      {t:"紅鑲邊",e:"red edge",d:"做青適度，葉邊緣呈鮮紅或朱紅色，葉中央黃亮或綠亮。"},
      {t:"綢緞面",e:"satiny",d:"葉肥厚有綢緞花紋，手摸柔滑有韌性。"},
      {t:"滑面",e:"smooth and fleshy",d:"葉肥厚，葉面平滑無波狀。"},
      {t:"白龍筋",e:"white vein",d:"葉背葉脈泛白，浮起明顯，葉張軟。"},
      {t:"紅筋",e:"red vein",d:"葉柄、葉脈受損傷，發酵泛紅。"},
      {t:"糟紅",e:"auburn red",d:"發酵不正常和過度，葉底褐紅、紅筋紅葉多。"},
      {t:"暗紅張",e:"dull red leaf",d:"葉張發紅而無光澤，多為曬青不當造成灼傷、發酵過度而產生。"},
      {t:"死紅張",e:"dead leaf",d:"葉張發紅，夾雜傷紅葉片，為採摘運送時人為損傷、悶積或曬青做青不當而產生。"}
    ]
  },

  white: {
    shape: [
      {t:"毫心肥壯",e:"fat bud",d:"芽肥嫩壯大，茸毛多。"},
      {t:"茸毛潔白",e:"white hair",d:"茸毛多、潔白而富有光澤。"},
      {t:"芽葉連枝",e:"whole shoot",d:"芽葉相連成朵。"},
      {t:"葉緣垂捲",e:"leaf edge roll down",d:"葉面隆起，葉緣向葉背微微翹起。"},
      {t:"平展",e:"flat leaf edge",d:"葉緣不垂捲而與葉面平。"},
      {t:"破張",e:"broken leaves",d:"葉張破碎不完整。"},
      {t:"蠟片",e:"waxy flake",d:"表面形成蠟質的老片。"}
    ],
    dryColor: [
      {t:"毫尖銀白",e:"silvery pekoe",d:"芽尖茸毛銀白有光澤。"},
      {t:"白底綠面",e:"silvery back and green front",d:"葉背茸毛銀白色，葉面灰綠色或翠綠色。"},
      {t:"綠葉紅筋",e:"green leaf and red vein",d:"葉面綠色，葉脈呈紅黃色。"},
      {t:"鐵板色",e:"iron grey",d:"深紅而暗似鐵鏽色，無光澤。"},
      {t:"鐵青",e:"iron blue",d:"似鐵色帶青。"},
      {t:"青枯",e:"green with less gloss",d:"葉色青綠，無光澤。"}
    ],
    soupColor: [
      {t:"淺杏黃",e:"light apricot",d:"黃帶淺綠色，常為高檔新鮮之白毫銀針湯色。"},
      {t:"微紅",e:"slight red",d:"色微泛紅，為鮮葉萎凋過度、產生較多紅張而引起。"}
    ],
    aroma: [
      {t:"毫香",e:"tip aroma",d:"茸毫含量多的芽葉加工成白茶後特有的香氣。"},
      {t:"失鮮",e:"stale aroma",d:"極不鮮爽，有時接近變質，多由白茶水分含量高、貯存回潮產生的品質弊病。"}
    ],
    taste: [
      {t:"清甜",e:"clean and sweet",d:"入口感覺清新爽快，有甜味。"},
      {t:"毫味",e:"tippy hair taste",d:"茸毫含量多的芽葉加工成白茶後特有的滋味。"}
    ],
    leaf: [
      {t:"紅張",e:"red leaf",d:"萎凋過度，葉張紅變。"},
      {t:"暗張",e:"dull leaf",d:"色暗稍黑，多為雨天製茶形成死青。"},
      {t:"鐵灰綠",e:"iron grey with green",d:"色深灰帶綠色。"}
    ]
  },

  black: {
    shape: [
      {t:"金毫",e:"golden pekoe",d:"嫩芽帶金黃色茸毫。"},
      {t:"緊捲",e:"tightly curled",d:"碎茶顆粒捲得很緊。"},
      {t:"摺皺片",e:"shrink",d:"顆粒捲得不緊，邊緣摺皺，為紅碎茶中片茶的形狀。"},
      {t:"毛衣",e:"fiber",d:"呈細絲狀的莖梗皮、葉脈等，紅碎茶中含量較多。"},
      {t:"莖皮",e:"stem and skin",d:"嫩莖和梗揉碎的皮。"},
      {t:"毛糙",e:"coarse",d:"形狀大小、粗細不勻，有毛衣、筋皮。"}
    ],
    dryColor: [
      {t:"灰枯",e:"dry grey",d:"色灰而枯燥。"}
    ],
    soupColor: [
      {t:"紅豔",e:"red and brilliant",d:"茶湯紅濃，金圈厚而金黃，鮮豔明亮。"},
      {t:"紅亮",e:"red and bright",d:"紅而透明光亮。"},
      {t:"紅明",e:"red and clear",d:"紅而透明，亮度次於「紅亮」。"},
      {t:"淺紅",e:"light red",d:"紅而淡，濃度不足。"},
      {t:"冷後渾",e:"cream down",d:"茶湯冷卻後出現淺褐或橙色乳狀的渾濁現象，為優質紅茶象徵之一。"},
      {t:"薑黃",e:"ginger yellow",d:"紅碎茶茶湯加牛奶後，呈薑黃色。"},
      {t:"粉紅",e:"pink",d:"紅碎茶茶湯加牛奶後，呈明亮玫瑰紅色。"},
      {t:"灰白",e:"greyish white",d:"紅碎茶茶湯加牛奶後，呈灰暗混濁的乳白色。"},
      {t:"渾濁",e:"cloudy",d:"茶湯中懸浮較多破碎葉組織微粒及膠體物質，常由萎凋不足、揉捻或發酵過度形成。"}
    ],
    aroma: [
      {t:"鮮甜",e:"fresh and sweet",d:"鮮爽帶甜感。"},
      {t:"高銳",e:"high and sharp",d:"香氣高而集中，持久。"},
      {t:"甜純",e:"sweet and pure",d:"香氣純而不高，但有甜感。"},
      {t:"麥芽香",e:"malty",d:"乾燥得當，帶有麥芽糖香。"},
      {t:"桂圓乾香",e:"dried-longan aroma",d:"似乾桂圓的香。"},
      {t:"祁門香",e:"Keemun aroma",d:"鮮嫩甜香，似蜜糖香，為祁門紅茶的香氣特徵。"},
      {t:"濃順",e:"high and smooth",d:"松煙香濃而和順，不嗆喉鼻，為武夷山小種紅茶香味特徵。"}
    ],
    taste: [
      {t:"濃強",e:"heavy and strong",d:"茶味濃厚，刺激性強。"},
      {t:"濃甜",e:"heavy and sweet",d:"味濃而帶甜，富有刺激性。"},
      {t:"濃澀",e:"heavy and astringent",d:"富有刺激性，但帶澀味，鮮爽度較差。"},
      {t:"桂圓湯味",e:"longan taste",d:"茶湯似桂圓湯味，為武夷山小種紅茶滋味特徵。"}
    ],
    leaf: [
      {t:"紅勻",e:"even red",d:"紅色深淺一致。"},
      {t:"紫銅色",e:"coppery",d:"色澤明亮，黃銅色中帶紫。"},
      {t:"紅暗",e:"dark red",d:"葉底紅而深，反光差。"},
      {t:"花青",e:"mixed green",d:"紅茶發酵不足，帶有青條、青張的葉底色澤。"},
      {t:"烏暗",e:"dark auburn",d:"似成熟的栗子殼色，不明亮。"},
      {t:"古銅色",e:"bronze coloured",d:"色澤紅較深，稍帶青褐色，為武夷山小種紅茶的葉底色澤特徵。"}
    ]
  }
},

taiwan: {
  oolong: {
    shape: [
      {t:"球形",e:"ball-rolled",d:"台灣半球形／全球形烏龍常見的緊結球狀外形，經反覆團揉而成。"},
      {t:"半球形",e:"semi-ball",d:"介於條形與球形之間，台灣高山烏龍最常見的外形。"}
    ],
    soupColor: [
      {t:"蜜綠帶黃",e:"honey green-yellow",d:"台灣輕發酵高山烏龍常見的明亮蜜綠偏黃湯色。"},
      {t:"琥珀色",e:"amber",d:"中重焙或重發酵烏龍常見的橙紅明亮湯色。"}
    ],
    aroma: [
      {t:"高山香",e:"high mountain aroma",d:"高山茶區特有的清揚細緻地域香。"},
      {t:"焙火香",e:"roast aroma",d:"經烘焙產生的火香，依輕焙至重焙程度而有差異。"},
      {t:"炭焙香",e:"charcoal-roast aroma",d:"以木炭烘焙產生的特有焙火香。"},
      {t:"桂花香",e:"osmanthus aroma",d:"似桂花的清甜花香。"},
      {t:"蜜香",e:"honey aroma",d:"小綠葉蟬著涎後產生的似蜂蜜香，如蜜香烏龍、東方美人。"},
      {t:"熟果香",e:"ripe fruit aroma",d:"中重發酵或熟成所呈現的熟果般甜香。"}
    ],
    taste: [
      {t:"喉韻",e:"throat character",d:"茶湯入喉後在喉間留下的甘潤回味感。"},
      {t:"山頭氣",e:"terroir character",d:"特定山頭茶區所展現的地域風味特徵。"},
      {t:"軟水",e:"soft mouthfeel",d:"茶湯口感柔軟順口、不刺激。"},
      {t:"回甘生津",e:"sweet aftertaste & salivation",d:"飲後回甘並兩頰生津。"}
    ]
  },
  black: {
    aroma: [
      {t:"蜜香",e:"honey aroma",d:"小綠葉蟬著涎後產生的似蜂蜜香，如台灣蜜香紅茶。"},
      {t:"肉桂薄荷香",e:"cinnamon-mint aroma",d:"台茶18號「紅玉」特有的天然肉桂與淡薄荷香。"}
    ],
    taste: [
      {t:"喉韻",e:"throat character",d:"茶湯入喉後在喉間留下的甘潤回味感。"}
    ]
  }
}

};
