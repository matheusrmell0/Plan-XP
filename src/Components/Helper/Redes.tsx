import Facebook from '../../Assets/components-svg/FacebookSvg';
import Instagram from '../../Assets/components-svg/InstagramSvg';
import Youtube from '../../Assets/components-svg/YoutubeSvg';

const Redes = () => {
  return (
    <div style={{ height: 'fit-content', display: 'flex', gap: '20px' }}>
      <a href="./">
        <Facebook />
      </a>
      <a href="./">
        <Instagram />
      </a>
      <a href="">
        <Youtube />
      </a>
    </div>
  );
};

export default Redes;
