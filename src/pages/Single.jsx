import React from 'react';
import '../../src/fontello/css/fontello.css';
import Photo from '../img/tlo2.JPG';
import Profile from '../img/1.jpeg'

const Single = () => {
  return (
    <div className="single">
      <div className="img">
        <img src={Photo} alt="blog-photo" />
      </div>
      <div className="user">
        <img src={Profile} alt="profile-photo" />

        <div className="daneUser">
          <div className="fullName">
            Teresa
          </div>
          <div className="whenPosted">
            posted 2 days ago
          </div>
        </div>

        <button name='editPost' className='edit'><i className="icon-pencil"></i></button>
        <button name='deletePost' className='delete'><i className="icon-trash-empty"></i></button>
      </div>

      <div className="post">
        <div className="postTitle">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
        </div>
        <div className="postContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam debitis quos voluptate corporis? Architecto incidunt aperiam unde molestias vel recusandae deserunt atque optio, repudiandae sequi odit! Nulla dolorem id hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum possimus ex velit accusantium alias hic officiis eius. Recusandae, vel est! Deleniti dolorem earum inventore blanditiis vitae assumenda sequi animi ab saepe, minus accusantium alias dolorum expedita, error dignissimos quas nemo. Doloremque, repellat ea? Dignissimos, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto, doloremque magni dicta, provident dolor impedit numquam a, odio vitae officia vero rerum. Nihil voluptas fugiat nostrum accusamus non reprehenderit.
          Animi molestiae voluptatibus nesciunt perferendis odit dignissimos quae eius dolor molestias atque dicta nostrum ab consequatur aut ut, ad exercitationem explicabo dolorum sit nihil reprehenderit fugit voluptate expedita magni? Est.
          Ea nemo dolores quo, odit mollitia quia ab facilis tempora porro, dolorum nulla saepe, deleniti enim rem voluptatum quaerat sint? Aut eius, eaque earum omnis ut dolores totam soluta veniam.
          Incidunt accusamus eum delectus sapiente libero numquam tenetur consequuntur iure provident maxime harum laboriosam quas dolorem fugiat quod cupiditate, nihil nulla expedita mollitia excepturi amet, debitis voluptates. Doloribus, assumenda totam?
          Inventore, nihil vero culpa eos dolore, officiis aspernatur modi facilis ducimus eius enim sunt! Pariatur autem quis vitae earum, voluptate aliquid magnam quam nemo, dolorum accusantium, eius ullam labore quidem.
          Quae maxime, pariatur tempore quo dolorem voluptas, quod perspiciatis nihil dolorum, iusto atque dolores excepturi mollitia tenetur saepe dolore rem debitis hic ducimus error veniam dolor itaque? Quidem, quibusdam! Soluta?
          Tempore et excepturi aliquid inventore explicabo voluptas eaque dolore iure consequatur cum! Cum id aliquam, tempore vel obcaecati eveniet impedit omnis quidem alias commodi incidunt, accusamus iure, ut facere molestiae.
          Pariatur quisquam delectus expedita nobis fugit illo tempore? Amet esse similique in quidem porro. Voluptates ab corrupti expedita, quia perferendis ea nisi et exercitationem pariatur eaque veritatis culpa, asperiores unde!
          Perspiciatis dolore praesentium, officiis temporibus, mollitia magnam harum dolorum provident, nihil itaque consequuntur saepe. Molestiae aspernatur laudantium autem error, vel debitis voluptatem ratione, magni consectetur odit accusamus est nihil necessitatibus!
          Non nihil natus tempora laborum voluptatum. Illo eius sapiente iste modi, maxime, reprehenderit aliquam voluptatem vitae, dignissimos quasi harum inventore dolor error eum incidunt soluta ut quod consequatur amet nihil.
        </div>
      </div>
    </div>
  )
}

export default Single