'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d7d29f9cbc3df9f45aecf9052a3d2b06",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9861f3c6f3ae4da654e8d6611d973d6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78b12b6d4ee12b329e45ca565769e451",
".git/logs/refs/heads/main": "dacf88444ddb10868a2cbe37c79a717d",
".git/logs/refs/remotes/origin/main": "d8b3e13f9aac4985207e54dd91c4e3d7",
".git/objects/00/14030d12d532e14563959c28e060b8da903852": "30f8748b09bd37d6e2b9c0b0139cadc1",
".git/objects/00/1d6ba0132d361f565813e5b1ec2b70fe275478": "e8ca8db35e5dd4575e534d31434a07b5",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/4c598f86cfacefd16216a91b1c1c0a1dc1e9e8": "c0a3c0f680a39dd24020a6592108d187",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/11/14ccad9b2ea92f1272552806dc65d86d0125cb": "770d0181b46665f78f16975f4d6c3bd2",
".git/objects/11/1e8123f52ef3031d9311e672f082638749592b": "c7773de460b91891a7e357ccbbf0a1d3",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/934611c307c9e5d8622c8a08cba1a78b43702f": "a0f9d019b9ecf58c83d33e784568be44",
".git/objects/15/0babc25c1606dc7fbd5fa860643a1303edc4b6": "9dda0b2b8e2ca70b796b6b7bbf14b1f7",
".git/objects/15/286e059accdadf4d761f3b1671fd679185d624": "02032d9bca4ab105ad4bedc1fab37c92",
".git/objects/16/acf1fa1eb0f7a832caf9d0cb1787f6380ede46": "e8f98b100a43e1864341c7d5b0974dd4",
".git/objects/18/a68379360db5d2bd80fe1c4d11f4d3751532d9": "8d1a9424d949bf4ea222e1f4b5b0bcb4",
".git/objects/1d/dc0f0bb4949e731fc74e893af053cb646c420f": "c06b7a8fa8d414abff55600a7f0f662a",
".git/objects/1e/515e271a2b4f7c7feca2bca363251957d27210": "3cad79045e2153be2865a4dcc1270925",
".git/objects/22/61a275e85588bd2b57a7030ec45bc139ab5152": "489ff59f4e99ccaed34169486c088ece",
".git/objects/22/74be57f7fb06d1e1925cb0241a946ac1b8183d": "582a6af02110527a10aea0985300dd86",
".git/objects/29/5d3debe34af27d44dbc34bd58ca1e919d426ad": "c6f880ffb9b370fe498d9bb0fed65495",
".git/objects/29/af40a79e0f0f2bcf0edf64a16569814f103aa1": "930b966ba10813515177e0a3d6337b5d",
".git/objects/32/195c4d35d803ed8d57b2af9373fd90366134d5": "efb51b43a9a7795339ad49912ec55b9c",
".git/objects/32/87cecc64ac006803a5e084f59ca62874b31f13": "b073317f34c7f9e035cacc30852918e7",
".git/objects/33/66cb58ade93da77a7714e6ab04989a33e637e4": "d2b3e8e61375b442ec6bb9b7edfc4672",
".git/objects/37/5dda629622d9ea4454ad311dbc9dde5bb7102e": "935bf4666ec2736fab3d7310704af96c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/e33c354d6e5cab32e2ad0695204383ae36a023": "4b3ae8d271019dbb276b1dc76b3810bd",
".git/objects/39/6eaefe2e530e0c490525cc6095d2b324d71f61": "66a30d78d1b1c6a0f0d5c5f9f50c64b5",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/41/e52314de4b9cf3a051b2690ad77b96d2c189e0": "cba521ec27336ee50b6f53bb54cc931d",
".git/objects/44/86cb6847b2b2d78ab1205d3422a2ae1c71a78a": "3b5a609f890ecbb5336e300ed5f9b8f7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/51/d5a298c99a01158c152958ab78c5287be33df4": "4629ffc6c265160231f953b0cc13e139",
".git/objects/54/2bd82707b8c2ccd43287e788404ff6cf6f81bf": "4ebda4502fb0bfb1d3581cc0d3c971d7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/59/18cab29cc48a6103257d50f68da40d057708c2": "7dbdae846dff130b19d456b689fefc50",
".git/objects/5f/9bd46b32ac33bf01df9c26aaf3da579451a318": "6b075de7ffa3c636516c982d31052a69",
".git/objects/60/38707c4823debbae8bf8cda66e8a6dc0349d26": "67e7c37df13b11918aaf6a433da976eb",
".git/objects/65/b358b198650dfde4041283d5f7d7cf6419ae17": "5e595f2ea2e856f9e04e216d6cab7a13",
".git/objects/66/9d9e87ec9a83dcccbcc8ead9cba64bf48d7e11": "fd54315fb4cf1fa9f08e93dea51039ee",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/6d/767e61f209064739450927997a72808a99d93b": "29bd33df79306f3edeb17100b9aadd81",
".git/objects/6d/f2466a799fbfffbb8904e13afdca3d531e95c4": "2816520d24746d4292a899b167fbb5b8",
".git/objects/6e/d7279f221398f29e5c148b71080df2ddf0246d": "c20f196b21dd2dfcee894b192647b57b",
".git/objects/6f/34dbcdcb7e8fdd7fa767d2c2f547589296f899": "a2f5fb8571601a15057087bb19b6b75f",
".git/objects/73/942119d9032a890a797b2595e9d56dbd8ebf8c": "564ae4537f1d53e3d3bdba7c74e590f8",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/52bd6fd008a914c2df053fc4ea3e95a41dcbd4": "0c80302185173b63e6180935700e943d",
".git/objects/7b/55c7cbea9abee66d480f05b251d7bdc481855f": "5f5ed0c98592aa496aa95f37da3ceae2",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/8a/456744a6caec92cdef9caab5c9686a48c2c609": "1d30b50ba2621838782085d5268a6953",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8d/8c1274555e1fc85e8ae0bec1af0680e1b2fc75": "dd31ad950d38c33feb369b840fe34f13",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/23ca9fde3eb99b6f15f8b58a20a2b0e53f7633": "359dcb9c565595ada4bb8aba67401e6b",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/ede019b08b5fe6089bebc1593ea4d6b037e0c1": "a3ebb0f08236bddb3bca5383a21319f5",
".git/objects/96/3a900eebb1db787034e2b4e5b4245f3a30e392": "82b2c47e64c350d60958aa69703ec458",
".git/objects/96/6a6a93e2fd311f4685e9e3c3f945c4ede13a2c": "39c0bd5fe0160bb48cd6877549b7a82b",
".git/objects/98/a023276cecf1cdbf3e9b4beb12bc7196405a2c": "cd8b011ce38b5a80a519af4dd7d38a2f",
".git/objects/99/97423d529af72ff3f0d1ee3d3448c997561452": "69f5fb444191d4c646f766fb64a293f6",
".git/objects/9f/0c4401d7bf6fcdb69b7095fd1c50cad6015030": "977e22f9a569b167da8a1b682a692704",
".git/objects/9f/7ddb533d6545103ba606d0d44159b95b10cbcc": "5538e14eb3df89bf886e1b2859565216",
".git/objects/a0/9055cfccc0f4529f1622461864f6cfba7c9ffa": "6c693639d041734a3f1134f3b83c0da4",
".git/objects/a4/ac6fa05d9c8d608248932ac733ac7fb36f3760": "cde31b52042d48069bbca644257be8db",
".git/objects/a5/42bf43088ee8341e83e64eb21ec1660431e43e": "eca308393811adb354f7d826c9fa998a",
".git/objects/a8/ff9bb1b9ad43a0aae76c4278ca77c6302f3d3a": "77ae1ef403d781c62d7210f53b9afc0a",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b3/9027d5bdf769ea0bd4978e0d0f2a6f24b66275": "406aae7091d8956410740edfccd41e90",
".git/objects/b6/94132a58a709c245eeef1fe6528beba1bf46a2": "61dcb11ab3b1a5f5fd6709feca0003d4",
".git/objects/b6/b92020704c44358cf5363eb31b2d512de0185d": "d8edbdbaefd37acaa54a425d1dd9d04c",
".git/objects/b6/e130efb22ab40b86dbf789f077c43183792c2b": "d49b3ffe747e9285e59f5ea7a1d069e0",
".git/objects/bb/2735a200995f4cffc046ab2d88eb750f2f44a0": "f777215b81c54383ce6ce5b13553f38d",
".git/objects/bc/f092c33d25df28f95f6d584f2595fd8c5a4bdb": "0898bf36a45f8ee730000906e73293b0",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c2/025f864da69cc45944220b350e6b731a5c014d": "f69e5941192e3a07c93daaf6199b0a61",
".git/objects/c8/1465ed9d38a26d0e4e0d523d743939671c724c": "909a7d6a433dfe4b0e33b239dd8ccc82",
".git/objects/c8/7491f56b9c2b83a2b88fe34fb8f4c7caa3e981": "a337a82ee758d8d3274e2d6a0e2acbf8",
".git/objects/cd/6dd439f9b6e8fcbffeb568bb6ed33c95333a9e": "036a208033b5ba2a2fe9ee18c1806513",
".git/objects/d0/f61115385a7985d9e45c759419d55a6b41e408": "78f242c7d9510543a9ccadf1f9a1ac8e",
".git/objects/d3/74833206c634a00dedbab64c03d899d57c064d": "b36906b969510075a6a2ef9cb95df8e8",
".git/objects/d3/bd0bb040757e075bd2e7dfc3647a732d7a06e3": "1536c563e9aba1279fd1c449b51f1bef",
".git/objects/d3/f774b37a70eb31f82a64e62ef302e95fb67741": "a1c49fb7919a48be773a944da7670df4",
".git/objects/d5/194c4b3cf6fce4f9a8b1cb2d271889073547a0": "0a9176691b9ba77eae514b2d6364cb91",
".git/objects/d5/dcc6cab63be2628e4a2d1a48e5e157482c97f6": "91210c613c0c24f41df00fb9972c46c3",
".git/objects/d6/6bdd364cc4ed075f63604e446967864091e390": "4c971748fbf6d1f12feb57c462aa1d01",
".git/objects/d9/3f501bb320ed3681f3f336b7593dcb1078662d": "d7e7acf894ab83415038306e8d344d06",
".git/objects/dc/9b7e115300c985911919ac4b99cc0e6e9fc7f4": "36ebc85d339649beb62e72236eb89fb9",
".git/objects/dd/d5b46eb59c84234f311bd8d85c5a27a0386524": "7461c750edab36e3d66f2b8618e2cc5c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/95df151039bc14cf2bfa4471065290b870d915": "96a57e28a0835b1248fb04af43b25be2",
".git/objects/eb/8d4c4ea0fc4464d1636ce05a09cd084840ad93": "5c2e4a8116c4e2dc4f0eef9a4c95382e",
".git/objects/f1/ff3195922f4333f81fc9080a36389469683ede": "6ab184f18eb3b653d782f75f3b870d0f",
".git/objects/f3/b7edf056e2bb03b9cb7774cb67576198981251": "e1443a4faf166ab2bc67ab232ace5997",
".git/objects/f4/1c1a4ce742636a1b64a5838d80d059bf766254": "616e15121e5c74916bfc280b2d51315c",
".git/objects/f4/5dacfd52aa934044eca3fc66e86d3d7078f178": "6a058aa00e79307e43d3c0124f6941b8",
".git/objects/f7/f02641b0f8b3dc2571653c88c723e31405d66e": "e2becdd0bc9c69d4a5c3183a124a5a00",
".git/objects/f9/fdfdf97eab1e1b79ad5d931ba4fb5369574595": "f4a0a14928a421fc4cfeef9cdf9ed556",
".git/objects/fa/4623c8c70659b5936b5c39ce9d5a90dccef797": "510ab0b1ba0ea8eb52de705065fc5de6",
".git/objects/fa/70414d9d2d4c5eeeeaaf9d59a7cf40a5384594": "c17f510949b27d722b52d23dfa9c3c30",
".git/objects/fb/d2912ed7b668b630b07911d72a6ca7be68d17f": "012795c2ab0df33a64d73481b46970c4",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/c73e85c002db928bad1330a203d529b0592c73": "fa3eb6e6d333f0cd4628c77fabcae714",
".git/objects/fe/4c939252acb7833048d2305b17dd50df841879": "58e58d0ecd71c0bf3ddc4e41b8137790",
".git/objects/fe/f1b1e33aee8d663eb0bfc187099ca51089d4a9": "bccc0b87c890642918a28290897552bd",
".git/refs/heads/main": "33670548f17ec03d5964d0ee8ca9a459",
".git/refs/remotes/origin/main": "33670548f17ec03d5964d0ee8ca9a459",
"404.html": "76a4ff599c9f316f8556287d66305a8e",
"assets/AssetManifest.json": "9bfc1fb41c4f3d1d3793a0ffc93a856a",
"assets/assets/images/portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"assets/assets/translations/en.json": "403f61e66f0f75e413f14eb8642ec029",
"assets/FontManifest.json": "13a826883971e5493399d93d37ea8c55",
"assets/images/portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"assets/NOTICES": "f70baddd7a5cb77ad1c7600b4a193509",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/translations/en.json": "403f61e66f0f75e413f14eb8642ec029",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "6d5a276123bcfe8633a98266d29fa9e1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "f7bb9db69340c5df9dbaffd0e45bb10d",
"icons/Icon-512.png": "1c45c0fbce43d005981a03d1521257fd",
"index.html": "a16600877efcddfbd47499007ebd2ef7",
"/": "a16600877efcddfbd47499007ebd2ef7",
"main.dart.js": "38dfa704c11e3ab1f4a36cbc4b27ca12",
"main.dart.js_1.part.js": "f8a4cdfa7f2305051d0afc29bccc7e61",
"main.dart.js_10.part.js": "e48b9422148dfb409824052462ef97b1",
"main.dart.js_11.part.js": "91c2ff95aa65d5506901fc3f025079bf",
"main.dart.js_12.part.js": "c5ffa314bfd1e2c5e630d84b463b041e",
"main.dart.js_13.part.js": "639d7a3ab149f5f40f730488771ee7f1",
"main.dart.js_14.part.js": "765ed51fd83749fdee0ca5a8b99038fe",
"main.dart.js_15.part.js": "734aa8a7b09f9cf3ccb13d5b01f96791",
"main.dart.js_16.part.js": "12a23b79e20c00fe18668501797aacb0",
"main.dart.js_17.part.js": "650797aaed50d1fc65062f21960fbf08",
"main.dart.js_19.part.js": "4bcf3795b3965ca9d5f723e6e5dfb617",
"main.dart.js_2.part.js": "a924d711520f00de3b72d15e646d71ab",
"main.dart.js_20.part.js": "bd4511078d822ff59e1fb5f22bb1edd7",
"main.dart.js_21.part.js": "bd53c668d3f5e3940a269d707e4caeda",
"main.dart.js_22.part.js": "488e6c33faae4ce54c8fac8a82fa531b",
"main.dart.js_24.part.js": "7ef4c7f1f244879a871fc266852509df",
"main.dart.js_25.part.js": "2d2f16095917ff7de95d1ae41cc985c8",
"main.dart.js_26.part.js": "2f662a7a2967854a992aea96d9af8f80",
"main.dart.js_27.part.js": "dc95fc069f573836f49cd6c3f429e3be",
"main.dart.js_28.part.js": "e74b9a0a380b2e15847f04f0cfddfba6",
"main.dart.js_29.part.js": "d83d2c17fd1c4248100b244b828ffc8e",
"main.dart.js_3.part.js": "36f5ba97b325c7123e5e8e71c4ef4b83",
"main.dart.js_30.part.js": "2ad72cff79dbb3164537d3b6eb1190f8",
"main.dart.js_31.part.js": "98dd4feb01510ec4d338906921be6d42",
"main.dart.js_32.part.js": "f2696703c854a37c4968f0c554a34d26",
"main.dart.js_33.part.js": "e152016762707392c940006eb481fbbf",
"main.dart.js_4.part.js": "fce0ea63c18c31704f6e39182dce4760",
"main.dart.js_5.part.js": "d0841a4501fc419f93ca3036539cf263",
"main.dart.js_6.part.js": "a530fa12c2fdeae83e336bec69bcda3f",
"main.dart.js_7.part.js": "7a8c1314951f59a03d3956abd48a4fa5",
"main.dart.js_8.part.js": "f02ef6cca6af3e4769efdaeda67c6d95",
"manifest.json": "0bfb143bb7dc9cec0d1a26f2ee298bb3",
"portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"robots.txt": "b4f69ecb96fa2a15e3fb24b5e80899e5",
"sitemap.xml": "04fdfaa446ac51b14021895185f0f4ab",
"splash/img/portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "b2c8393bb4e16358db90b15533a7f2e7",
"version.json": "0e78357d87b6cea16291c12c6bb5e2e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
