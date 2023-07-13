"use client";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function page() {
  const ref = useRef();
  const isInView = useInView(ref);
  //   const { scrollYProgress, scrollY } = useScroll();
  //   //   useEffect(() => {
  //   //     console.log(scrollYProgress);
  //   //     console.log(scrollY);
  //   //   }, [scrollY, scrollYProgress]);
  //   useMotionValueEvent(scrollY, "change", (latest) => {
  //     console.log("Page scroll: ", latest);
  //   });

  return (
    <div>
      {/* <div>{scrollY}</div>
      <div>{scrollYProgress}</div> */}
      <motion.div className="w-40 h-40 mx-auto mt-40 bg-red-500"></motion.div>
      <motion.div className="w-40 h-40 mx-auto mt-2 bg-green-500"></motion.div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quibusdam saepe suscipit accusantium vitae maiores molestiae sapiente,
        veritatis temporibus, distinctio totam esse enim libero harum
        voluptates. Dignissimos aliquid obcaecati fugiat. Voluptatum obcaecati
        quaerat incidunt deleniti necessitatibus natus quam, ad velit
        accusantium beatae. Ullam maxime reiciendis distinctio, natus corrupti
        doloremque nam minus voluptates, quo delectus provident optio fugit
        quaerat earum error? Odio, expedita vero odit dolorem eaque magni.
        Magnam debitis, repudiandae nobis modi commodi velit eaque earum
        provident ut, neque quia quaerat dolores quam? Ipsum eius nam fuga unde
        odio aut! Odit provident laborum ut obcaecati ea rem deleniti. Labore
        dignissimos sapiente vitae accusamus nobis molestias recusandae aperiam,
        maxime quaerat magnam fugiat dicta voluptatem incidunt officiis maiores
        error tempora animi! Nam! Doloribus ipsam eum in error, commodi dolore
        dolor consequuntur quaerat tenetur doloremque vero nobis natus
        architecto consectetur expedita. Quidem mollitia voluptatum,
        exercitationem accusantium illum sit rem magni quaerat debitis placeat?
        Similique reprehenderit impedit, odio itaque sint magni velit
        consequuntur, quaerat dolore quos error ipsa dicta ullam soluta labore
        omnis recusandae debitis. Expedita omnis quasi magnam. Voluptate maxime
        quaerat corrupti exercitationem! Repellat maiores qui at sed quis quo,
        sapiente ea accusamus, mollitia similique doloribus harum consequatur
        sunt ex illo sint fugit perspiciatis adipisci debitis odit placeat.
        Alias at accusantium cum exercitationem? Minima perferendis quis
        molestiae nemo veniam aliquam explicabo, sit suscipit neque natus,
        eligendi magni amet reiciendis, asperiores obcaecati aperiam quam est
        accusantium consectetur quasi et? Rem non magnam deleniti molestias!
        Distinctio nisi odit a ad, rerum quas odio quam expedita ea voluptates
        blanditiis tempora! Odio ratione id hic natus quisquam veniam at
        repellat beatae ducimus asperiores dolorum, architecto ipsa nulla! Quis
        saepe impedit tempora fugit alias nobis iure optio sunt in doloremque
        praesentium aliquid, nihil voluptatem ratione inventore fuga tenetur sed
        autem voluptatum quidem delectus quod veritatis laboriosam. Aperiam,
        aut? Minima magni excepturi laborum aspernatur esse perferendis
        molestias magnam nemo laboriosam adipisci? Voluptatum, autem. Odit
        voluptas quasi reiciendis provident. Sunt ea veniam, esse molestias
        expedita aspernatur suscipit dolorum libero incidunt. Numquam placeat
        dolores doloribus porro aut harum, non tempora dolor et error ab illo
        sequi dolorum velit qui fugit tempore saepe enim animi adipisci iusto
        asperiores ratione iure perferendis. Et! Asperiores temporibus aliquam
        animi doloremque iusto incidunt placeat suscipit quisquam vel neque
        consequatur odit quae hic eius dolorum aut exercitationem vitae ducimus
        earum illo explicabo commodi, amet aliquid ullam! Repellat! Numquam
        cumque quisquam cum itaque similique, deleniti quibusdam reiciendis
        culpa dolores, sint consequatur magni modi voluptatum atque pariatur.
        Expedita, perferendis blanditiis! Laborum vero soluta, eveniet ipsa modi
        in iure distinctio. Ducimus culpa amet asperiores qui? Nostrum sunt
        velit tenetur est quisquam! Dolorem doloremque dolorum maxime modi nam
        eos fugiat corrupti, odio ipsa? Iusto culpa hic placeat doloribus,
        laborum incidunt praesentium! Obcaecati iusto in porro. Cum quia
        adipisci sed numquam maxime repudiandae, quisquam suscipit animi ea
        natus magnam, exercitationem velit. Pariatur tempore labore fugiat iure
        id sapiente, temporibus nisi placeat perferendis! Dolor ex eius, animi,
        eaque quo asperiores laborum esse totam consequatur explicabo
        repellendus accusantium ullam quod dignissimos vitae. Itaque provident
        repellendus nesciunt, voluptatem facere enim eligendi odio. Voluptatum,
        quasi veritatis? Laudantium autem libero natus similique neque quas ex,
        rerum alias officia. Atque dolores rerum reiciendis provident error.
        Doloribus voluptates nemo, ipsam modi consequatur quis maxime! Excepturi
        ab odit repellat error! Porro ut ducimus ullam libero eum, in ad
        officiis corporis deserunt dolorem dolore recusandae perspiciatis
        tempora assumenda? Asperiores a, quidem animi quaerat consectetur
        molestiae id nihil eveniet esse. Optio, incidunt. Ab assumenda at minima
        saepe suscipit cum rem soluta non nobis. Delectus placeat magni ullam
        esse, amet unde exercitationem reprehenderit alias eum dolores harum ea
        quibusdam nisi, ex accusamus eius.
      </p>

      <div>
        <div ref={ref} className="w-40 h-40 mx-auto mt-2 bg-slate-500"></div>
        {/* <AnimatePresence> */}
        <motion.div
          className=" w-40 h-40 mx-auto mt-2 bg-green-500"
          // initial={{ x: 100, opacity: 0 }}
          // whileInView={{
          //   x: 0,
          //   opacity: 1,
          //   transition: {
          //     duration: 2,
          //     type: "tween",
          //   },
          // }}
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 4 } }}
          exit={{ x: "-100vw", opacity: 0, transition: { duration: 4 } }}
        ></motion.div>
        {/* </AnimatePresence> */}
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias iure
        harum nostrum, molestiae, facere minus illo ab repellendus enim hic sed
        delectus dicta, ut doloribus. Atque beatae temporibus consequatur.
        Tenetur facilis eligendi, fugit recusandae iste veritatis quisquam vitae
        ex asperiores, voluptatum quod voluptates ipsa rerum nihil debitis aut
        nobis dolorem! Veritatis, debitis accusantium assumenda enim quo quaerat
        possimus voluptatum! Reprehenderit nam ea, nobis, in distinctio aliquid
        quasi dolorem inventore enim ullam iure sint delectus necessitatibus
        eius nisi voluptates eum omnis adipisci a expedita rerum corporis?
        Aspernatur quasi quos officia! Harum, alias incidunt a similique,
        dolorem illum impedit officiis reprehenderit aut sequi eligendi unde
        totam voluptatibus nisi dicta dolorum aliquam veniam distinctio omnis
        accusantium vel architecto deleniti nulla adipisci! Laborum? Neque
        consequuntur quam incidunt exercitationem hic dolores quasi aspernatur
        fugiat ut, iure ratione, voluptates consequatur quia tenetur placeat
        asperiores? Totam vel quaerat eveniet corporis soluta aliquam dolorum id
        quisquam nihil. Excepturi itaque ab qui blanditiis sapiente nihil
        tenetur quia veritatis quibusdam maxime tempora ipsam voluptas aut
        dolorum, illo sint animi vel quos similique! Consequuntur quis dolore
        placeat odit quam tempora? Harum minima ad porro quo corporis fuga
        repellendus omnis explicabo! Aspernatur animi accusantium provident
        corporis in quasi quibusdam aperiam perferendis quia aliquid, aut, harum
        sit quam iste quaerat iure cum. Nam aspernatur blanditiis cumque illo
        cupiditate! Sequi accusamus accusantium provident? Ipsum cum omnis,
        libero quod amet repudiandae ipsam rem neque labore fugit ut tenetur id
        magni eaque fugiat. Saepe, suscipit! Eaque, inventore. Facere
        perferendis adipisci aperiam temporibus blanditiis reprehenderit quos
        tempore expedita nulla inventore commodi eius eligendi recusandae sint
        nam, ex perspiciatis, cupiditate nostrum ipsa dolor sit vel tenetur
        illo? Ratione accusamus nisi hic quae dolor odit. Tenetur, magnam
        consectetur accusantium explicabo vel odio ut qui voluptas sit, quasi
        voluptatibus adipisci esse totam culpa alias nihil labore voluptate
        corrupti sequi? Assumenda optio, iste qui quia ipsa quaerat in quisquam
        reiciendis earum beatae quo libero quam asperiores, dolorem vel,
        necessitatibus error vitae minus eos totam obcaecati dolores fuga
        reprehenderit facere. Eveniet? Maxime libero culpa dicta error
        consequuntur maiores inventore, ea recusandae illo architecto aperiam
        quos nisi aut optio? Quam, iusto cupiditate rem repudiandae reiciendis
        itaque et labore reprehenderit laborum quidem fugit. Incidunt deserunt
        molestiae quaerat quas facilis error dicta, mollitia perspiciatis cum
        cumque provident perferendis, nam eveniet beatae. Quidem et ex quod
        ullam, doloremque a, vitae facere iste numquam aut fugiat! Eligendi
        laboriosam nisi eius tenetur incidunt dolorem nam voluptates dolor
        facilis suscipit ipsa rerum sequi autem obcaecati, culpa commodi modi
        sunt ad, earum ex ut fugit soluta illum eum. Maiores. Quasi obcaecati
        sapiente numquam delectus aliquid possimus consequatur odio! Tempore,
        libero eligendi. Veritatis expedita sint sunt nisi excepturi quaerat
        facilis consectetur magni beatae! Dicta aut rerum corrupti laborum amet
        assumenda. Animi ipsam recusandae dolorum modi reiciendis quidem?
        Repudiandae tenetur unde ab assumenda ipsum autem laborum, mollitia rem
        perferendis, non dolorem nemo amet doloribus molestias modi qui
        perspiciatis porro culpa natus! Quae sapiente, corporis repellat nulla
        aperiam, nihil odio laudantium dolore quisquam nostrum distinctio labore
        soluta voluptates quasi nemo et, quas eaque sequi unde dolorum quod
        ipsam! Eum nesciunt iusto perspiciatis. Consequuntur atque magni iusto
        ea, debitis deleniti excepturi cupiditate, repudiandae suscipit deserunt
        placeat sapiente ipsa. Voluptate dicta rem, rerum necessitatibus
        consequuntur impedit vero quis velit iure iste minima iusto deleniti?
        Dicta nemo, qui doloribus quia saepe quas in quasi sit? Sed hic,
        suscipit incidunt molestias assumenda magnam totam explicabo ullam,
        laudantium ipsum praesentium eos delectus sit fugit autem facere magni!
        Culpa itaque, sint vero sequi eos repellat quo iure inventore
        perferendis voluptatum dolores vitae laborum eveniet cupiditate odit
        voluptatibus, repellendus aspernatur animi ut! Nam ratione, reiciendis
        impedit alias eveniet dolorem! Enim veritatis molestias odit. Eum ipsam,
        nesciunt assumenda ratione illo architecto, dolorum totam officia ad
        enim consectetur velit delectus unde? Sit numquam veritatis dolor. Cum
        veritatis repellendus maxime explicabo iure. Sed inventore aperiam minus
        deleniti optio cum eveniet autem, deserunt iste id amet pariatur beatae
        sunt reiciendis molestiae. Rerum eum, reiciendis tempore inventore eaque
        ab saepe quas a quam minima? Voluptas tempore quibusdam natus quos
        mollitia alias? Doloribus reprehenderit ratione hic ipsa modi, quo iure
        voluptatem dolor mollitia, sit alias, nostrum necessitatibus rerum
        molestiae dolorum natus fugit eveniet consequatur! Cupiditate. Molestias
        consequuntur a eos ea, eligendi odit nobis atque perspiciatis optio,
        obcaecati quibusdam assumenda, magnam recusandae molestiae architecto
        dolore tempore numquam nam at! Itaque, reprehenderit nisi amet modi id
        aut. Incidunt, corrupti. Ipsam odio accusamus impedit facilis
        consequuntur debitis quisquam maiores, animi nisi, minus rerum
        reiciendis inventore qui aliquid, repellendus nam ea a ex voluptatem
        tenetur! Molestias quis quos a. Voluptate temporibus rerum
        necessitatibus consectetur eveniet illum commodi tenetur ipsa
        voluptatibus voluptas, repudiandae amet sequi iure, asperiores fuga
        molestias enim esse adipisci harum, alias ipsam. Quia voluptates est
        accusamus deleniti. Consectetur, non deleniti voluptatem modi dolores
        praesentium fuga repellendus velit quos ratione error expedita
        aspernatur odio facere vitae quae quis! Mollitia, architecto deleniti
        amet aspernatur nobis provident at corporis nesciunt. Deleniti mollitia
        esse quasi autem nulla fuga, ipsam minus nesciunt, consectetur
        distinctio iusto hic adipisci iure quos delectus impedit voluptate nihil
        commodi voluptas? Voluptates praesentium, fuga corporis ratione qui
        unde. Quaerat dolores, doloremque adipisci sunt libero unde dolorem
        placeat, et dicta eum odio ratione nisi soluta perferendis neque animi,
        dignissimos obcaecati minima quidem repellendus laboriosam. Mollitia
        possimus officiis porro cum! Quos vel reprehenderit unde, dolores
        reiciendis recusandae magni eum facilis! Earum tempora repellat at
        reprehenderit natus commodi minus magnam tenetur dolores dolorem
        voluptatum velit, ad numquam fugiat dolore debitis nesciunt.
      </p>
    </div>
  );
}
