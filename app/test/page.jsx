// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// export default function page() {
//   const carouselRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     container: carouselRef,
//   });
//   const scale = useTransform(scrollXProgress, [0, 1], [0.2, 2]);
//   const scale2 = useTransform(scrollYProgress, [0, 1], [10, 500]);

//   // console.log(scrollYProgress);
//   // console.log(scale);
//   return (
//     <div>
//       <div className="">
//         <motion.div
//           style={{ scale, x: scale2, y: scale2 }}
//           className="w-16 h-16 fixed inset-0 bg-red-500"
//         >
//           scroll progress
//         </motion.div>
//         <motion.div>scale</motion.div>
//       </div>
//       <div>
//         <p
//           ref={carouselRef}
//           className="bg-green-300 w-[10000px] overflow-x-scroll"
//         >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga
//           iusto amet eum mollitia animi voluptas molestias laboriosam maxime ex
//           veniam libero, quos nihil velit eius impedit qui nostrum quis.
//           Corporis voluptates voluptatibus atque molestiae culpa quasi amet
//           blanditiis ipsum harum laboriosam tenetur cumque vero velit magnam
//           doloremque molestias qui rem sapiente, debitis assumenda, reiciendis
//           asperiores? Aliquam neque ut officiis. Magni error architecto
//           asperiores! Voluptatibus incidunt quibusdam rem quos laborum mollitia
//           porro. Quibusdam aperiam minus eius corrupti soluta atque. Corporis
//           vel voluptatem obcaecati atque quidem voluptas ratione minus eligendi
//           mollitia. Soluta iure autem modi cum accusamus aliquid reiciendis non
//           ipsa enim corrupti nostrum maxime iste odio dignissimos labore saepe
//           hic, sequi perferendis, qui quaerat perspiciatis recusandae? Ex
//           recusandae rem eveniet! Facilis consectetur harum, quaerat ducimus
//           dicta sed vitae iste pariatur consequuntur beatae laborum impedit
//           error incidunt delectus maxime inventore iusto excepturi autem, itaque
//           sunt. Voluptas perspiciatis iure ea nemo explicabo! Nulla aliquid
//           autem est molestias? Rem accusantium deleniti quas dignissimos unde,
//           aspernatur cumque nulla atque reiciendis fugit distinctio. Incidunt
//           nulla facere eveniet ab. Minus, eligendi provident quo voluptates
//           explicabo nam. Reprehenderit tempore in incidunt deserunt modi minus
//           error maiores temporibus quasi sed, dolorem iste eligendi ducimus.
//           Unde, velit. Sapiente voluptate corrupti distinctio. Ducimus ab dolor
//           asperiores incidunt voluptatem officia quibusdam. Modi, praesentium,
//           perspiciatis dignissimos magni tempora asperiores impedit mollitia,
//           fugit doloribus aspernatur expedita id voluptatibus nisi qui officia
//           eligendi vel veniam amet ab obcaecati in molestiae eos. A, ipsum
//           ducimus? Ipsam, ratione culpa sint magni, maiores reiciendis nam
//           minima molestiae veritatis quis illo vel quasi inventore consequuntur
//           facere magnam autem repudiandae, debitis velit dignissimos iste
//           nostrum. Similique nemo possimus laboriosam. Aperiam provident non
//           officiis labore a, mollitia autem eius cum commodi, obcaecati rem
//           expedita alias iste eos sit minus nulla. Quisquam illum cum saepe
//           assumenda vel dolor minus nisi dolorem. Dicta distinctio placeat
//           perferendis suscipit eveniet, doloremque ex harum alias veritatis et
//           deleniti natus maxime sint? Perferendis assumenda architecto mollitia?
//           Reiciendis facere quaerat iste, dolores ducimus quia. Ipsum, quam
//           inventore! Quidem quasi temporibus unde non hic! Id quo aspernatur
//           nisi ducimus voluptate tempore soluta voluptas consequatur magnam
//           temporibus recusandae obcaecati maiores nihil mollitia sapiente neque
//           culpa non delectus, eligendi possimus. Temporibus laborum eligendi
//           culpa quam? Quisquam enim nemo dolores, numquam, similique nulla
//           commodi ipsum quidem nobis explicabo labore ipsa? Quisquam velit a
//           numquam eveniet vel nostrum expedita commodi molestias iure. Sit
//           quisquam enim sequi soluta maxime quo omnis ab praesentium corrupti
//           ex, iure similique reiciendis natus porro esse explicabo sint voluptas
//           sed iste suscipit atque accusamus debitis saepe. Officia, reiciendis?
//           Fugiat quam quis neque voluptatum dolorem! Numquam repellat cum rem
//           quisquam cumque nihil architecto quae doloremque sit expedita culpa
//           qui est laborum, asperiores molestias recusandae beatae porro
//           molestiae accusantium necessitatibus. Tempora esse quam voluptatum
//           iste quo quae ipsum molestias laborum perspiciatis sapiente, dolorem,
//           porro veniam alias qui numquam distinctio. Assumenda culpa rerum
//           repudiandae optio maxime tenetur cum at enim! Hic? Aliquid quos
//           possimus modi delectus corrupti eveniet aliquam quam et, dolorum quia
//           sunt alias. Optio temporibus earum perspiciatis et numquam quia. Ipsum
//           magnam ipsam in maiores est eligendi necessitatibus quidem? Voluptates
//           sequi iure nostrum ipsum minima. Optio autem minus sint magni quia
//           necessitatibus, a voluptatibus id natus deleniti nostrum eos dicta
//           explicabo quibusdam consectetur debitis expedita ullam accusantium
//           non. Molestias. Ipsam, temporibus eum! Molestiae libero soluta eaque?
//           Repellendus odit labore aspernatur, incidunt sed, saepe quibusdam
//           mollitia quisquam dolorem quia cum! Necessitatibus sit optio,
//           praesentium laborum ex mollitia impedit nisi cum. Quia quos labore
//           veniam rerum, perferendis laborum in, numquam repellat enim
//           consectetur ut ex voluptatem maxime, a sint. Voluptatum ipsa placeat
//           quidem rem dicta aliquam unde, maiores eius quaerat et!
//         </p>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
//           illo asperiores explicabo temporibus corrupti, quae non eligendi
//           dignissimos expedita quibusdam voluptates excepturi unde quod natus,
//           repellendus pariatur nulla harum reprehenderit! Similique voluptate
//           cum laboriosam blanditiis vero velit, totam eius aut veritatis
//           doloribus et. Odio, nemo recusandae id excepturi natus vero voluptatem
//           esse adipisci iste beatae fugiat reiciendis temporibus tenetur cumque?
//           Velit cupiditate quisquam consequuntur ducimus, sint obcaecati
//           doloremque iure fugiat eligendi, veniam veritatis illum omnis
//           voluptatibus placeat labore sit itaque repudiandae, rem ex qui.
//           Debitis, at saepe. Exercitationem, ad commodi? Reiciendis earum porro
//           eaque minima deserunt nam veritatis libero rerum pariatur dignissimos
//           cum recusandae adipisci quia, reprehenderit totam aspernatur est dolor
//           consequatur cumque vero illum delectus et non fugiat. Consequuntur?
//           Neque explicabo architecto et mollitia maiores. Ad dolorum laboriosam
//           commodi necessitatibus. Accusantium suscipit totam perspiciatis id
//           molestias. Quia, aliquid? Quasi dolorem ad maxime tenetur perferendis
//           commodi consequatur quisquam. Accusantium, ratione. Quaerat, voluptate
//           debitis. Quasi ipsum ipsa iure qui esse. Eaque quasi cupiditate
//           ratione praesentium voluptates nobis corporis quaerat fugit
//           repellendus, deserunt veniam fuga laboriosam, quod facilis ad odit,
//           error ducimus. Dolore, quae repellendus tempora consequatur
//           consectetur at! Nisi sunt quia error ad iure dicta aut id quisquam.
//           Rem, veniam, quae, dolores doloremque sed vero impedit ab amet debitis
//           aut nemo. Voluptatem nisi eaque, molestiae autem dolorem quis aliquid
//           quam facere. Odit, est sapiente minus sunt quibusdam temporibus qui
//           consectetur corporis? Impedit, vero? Beatae perspiciatis totam
//           nesciunt maiores pariatur accusantium recusandae. Repellat quaerat
//           porro accusamus nostrum illo omnis? Eum facilis debitis aperiam
//           laudantium dignissimos, neque dolorem maiores! Veritatis mollitia,
//           dolorum, possimus debitis ullam ad voluptate sapiente laudantium quia
//           rem necessitatibus laboriosam. Alias dignissimos consectetur enim
//           corporis, ad eius ut magni commodi. Modi eaque minima provident,
//           maxime ab recusandae natus laudantium repellat ut qui incidunt porro
//           sapiente fuga repudiandae fugiat repellendus placeat? Quisquam
//           commodi, delectus quasi vero repellendus dignissimos dolor tempora
//           enim eum nisi, itaque, similique harum dolorem dicta quae fugit.
//           Consectetur amet natus nostrum neque corporis cumque distinctio iusto,
//           deleniti eius. Praesentium, at vero! Velit eligendi magni reiciendis
//           iure amet, reprehenderit, culpa numquam qui ducimus cum voluptas
//           laboriosam unde facilis natus nemo animi, maxime cupiditate
//           necessitatibus! Error modi maxime debitis nam? Iusto pariatur odio
//           architecto accusamus, nobis consequuntur hic necessitatibus autem,
//           animi recusandae vel obcaecati asperiores error vero suscipit
//           quisquam, culpa quae minus eaque quod sunt voluptatibus quo officia
//           commodi! Porro. At quam recusandae deserunt? Illum, quae quidem
//           doloremque assumenda dolorum officia corporis quasi expedita
//           exercitationem suscipit error asperiores, nobis possimus. Ducimus
//           dolorem sed earum repellat quasi rem! Vero, sequi nulla? Aut, mollitia
//           corrupti id, consectetur est ad iusto optio cum illum natus fugit,
//           eveniet repellendus magnam sint. Minus similique deserunt itaque
//           eveniet odio earum ipsum dignissimos doloremque nihil, quae
//           laudantium. Fuga iure veritatis a nemo tempore ea rerum vero, itaque
//           veniam aliquam natus hic. Fugit reiciendis, ducimus quasi, aperiam
//           unde molestias provident nemo eaque, quo atque delectus cum ipsa
//           pariatur. Tempora eaque est maiores nobis deleniti delectus illum
//           quidem velit facere dolor necessitatibus voluptate nam ipsum id
//           recusandae, illo porro veritatis, quos mollitia reprehenderit quae.
//           Quia consequuntur minima velit molestias? Vitae debitis et natus dicta
//           fugit alias pariatur accusantium quis. Distinctio odit ducimus dicta
//           doloribus quae alias harum fugiat consequatur ratione, maxime sint
//           aliquid excepturi eaque? Possimus vel reiciendis quia. Non consectetur
//           explicabo nisi architecto cumque nam dolore natus at ipsam labore
//           dicta nobis neque perspiciatis deserunt exercitationem, doloremque qui
//           id blanditiis voluptates eveniet obcaecati eum officiis! Perferendis,
//           voluptate quisquam. Temporibus est necessitatibus fuga hic tempore,
//           non blanditiis quis eaque architecto incidunt beatae quia illo iste
//           amet itaque odit suscipit totam et debitis! Vitae, cupiditate? Labore
//           officiis inventore voluptates libero!
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function page() {
  return (
    <div>
      <motion.div
        className="w-52 h-52 bg-gradient-to-r from-purple-500 to-pink-500 border-green-500 border-[5px] bg-[length:500px_500px] bg-no-repeat"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{
          backgroundPosition: "100% 100%",
          transition: {
            duration: 2,
            repeatType: "reverse",
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <div className="w-52 h-52 bg-gradient-to-r from-purple-500 to-pink-500 border-green-500 border-[5px]  bg-no-repeat"></div>
    </div>
  );
}
