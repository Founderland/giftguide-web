import fdlGif from './assets/images/miniGif.gif'
import icons from './assets/icons/symbols'
import beautyBody from './assets/images/2.png'
import littleOnes from './assets/images/3.png'
import foodDrinks from './assets/images/4.png'
import happenings from './assets/images/5.png'
import home from './assets/images/6.png'
import seflCare from './assets/images/7.png'
import adventure from './assets/images/8.png'

function App() {
  const year = new Date().getFullYear()
  return (
    <div className='h-full w-full flex flex-col items-center overflow-y-scroll'>
      <header className='w-full flex justify-center bg-black text-white'>
        <banner className='max-w-4xl flex items-center '>
          <div>
            {icons.warmth(
              `w-24 h-24 text-flime fill-current`,
              `text-black fill-current`,
              0
            )}
            <img
              src={fdlGif}
              className='w-24 h-24'
              alt='Founderland animated logo'
            />
          </div>
          <div className='flex-grow mx-4 lg:mx-8 text-hanson text-4xl lg:text-8xl uppercase font-normal lg:font-bold flex flex-col'>
            <svg
              width='516'
              height='72'
              viewBox='0 0 516 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden lg:flex '
            >
              <rect width='515.581' height='72' fill='black' />
              <rect
                x='10.571'
                y='14.571'
                width='494.439'
                height='42.858'
                fill='black'
              />
              <path
                d='M16 20.4482H49.6445V30.0131H26.4137V33.051H44.5963V42.254H26.4137V51.8635H16.0045L16 20.4482Z'
                fill='white'
              />
              <path
                d='M71.0889 20.0018C73.5986 19.981 76.1067 20.1377 78.5943 20.4709C80.6628 20.7562 82.6893 21.2902 84.6298 22.0613C86.3288 22.7099 87.8734 23.7066 89.1643 24.9875C90.3981 26.2905 91.3354 27.845 91.9118 29.5444C92.6068 31.624 92.9393 33.8076 92.8947 35.9999C92.9368 38.1469 92.6428 40.2874 92.0235 42.3437C91.5095 44.0108 90.6579 45.5543 89.5217 46.8781C88.3341 48.1853 86.8686 49.2097 85.2329 49.8758C83.3071 50.6759 81.286 51.224 79.2197 51.5065C76.6288 51.8567 74.0161 52.0209 71.4016 51.9979C64.0125 51.9979 58.6426 50.6576 55.292 47.9771C51.9413 45.2967 50.2675 41.1106 50.2705 35.4191C50.2705 30.1743 51.9845 26.295 55.4126 23.7813C58.8406 21.2676 64.0661 20.0078 71.0889 20.0018ZM71.491 43.7733C74.651 43.7733 77.0932 43.1329 78.8176 41.8522C80.5421 40.5716 81.4073 38.6208 81.4132 35.9999C81.4132 33.4683 80.5034 31.5324 78.6836 30.1921C76.8639 28.8519 74.4217 28.1892 71.357 28.2041C69.9255 28.1811 68.4976 28.354 67.1129 28.7179C66.0054 29.0004 64.9751 29.527 64.0973 30.2592C63.312 30.9219 62.6988 31.7649 62.3104 32.7163C61.9067 33.7553 61.7094 34.863 61.7296 35.9775C61.6872 37.0437 61.8861 38.1057 62.3116 39.0843C62.737 40.0629 63.378 40.9327 64.1867 41.6289C65.8456 43.0614 68.2819 43.7762 71.4955 43.7733H71.491Z'
                fill='white'
              />
              <path
                d='M115.196 51.8628C110.518 51.8628 106.614 51.4011 103.487 50.4778C100.36 49.5546 98.1977 47.9597 97.0004 45.6932C96.0553 43.7038 95.4656 41.5644 95.2581 39.3717C94.9042 35.5926 94.7551 31.7972 94.8114 28.002L94.8561 20.4922H105.85V34.5245C105.845 35.3232 105.89 36.1215 105.985 36.9146C106.1 37.7115 106.334 38.4869 106.677 39.2154C107.023 40.0177 107.551 40.7287 108.218 41.2927C109.041 41.9329 109.982 42.4036 110.988 42.6776C112.359 43.0765 113.782 43.2648 115.21 43.2361C116.63 43.2656 118.046 43.0773 119.409 42.6776C120.386 42.4106 121.298 41.9469 122.09 41.3151C122.726 40.7429 123.223 40.0322 123.542 39.2377C123.869 38.5064 124.087 37.7313 124.189 36.9369C124.27 36.1354 124.308 35.3301 124.301 34.5245V20.4922H135.296V28.002C135.373 31.7964 135.239 35.5922 134.894 39.3717C134.686 41.5644 134.096 43.7038 133.151 45.6932C132.516 46.8953 131.605 47.9301 130.493 48.7132C129.235 49.5821 127.835 50.2247 126.356 50.6119C124.687 51.0686 122.984 51.3898 121.263 51.5724C119.248 51.7764 117.222 51.8733 115.196 51.8628Z'
                fill='white'
              />
              <path
                d='M177.705 51.8628H163.499L148.126 32.9609V51.8628H137.717V20.4922H152.236L167.341 39.0813V20.4922H177.705V51.8628Z'
                fill='white'
              />
              <path
                d='M202.151 51.8633H180.568V20.591H202.012C203.82 20.5772 205.626 20.6891 207.418 20.926C209.062 21.1678 210.668 21.6182 212.198 22.2663C213.709 22.8718 215.079 23.7845 216.219 24.9468C217.403 26.2545 218.295 27.8006 218.832 29.4812C219.55 31.6549 219.895 33.934 219.855 36.2227C219.889 38.3559 219.525 40.4768 218.783 42.4771C218.173 44.1493 217.213 45.6722 215.969 46.9446C214.767 48.1209 213.378 49.0887 211.859 49.8082C210.349 50.5431 208.749 51.0763 207.101 51.3942C205.469 51.704 203.812 51.861 202.151 51.8633ZM201.436 43.3259C202.895 43.3692 204.34 43.0386 205.635 42.3654C206.721 41.8028 207.61 40.9222 208.182 39.8413C208.734 38.732 209.009 37.506 208.986 36.2673C208.986 34.1229 208.39 32.403 207.199 31.1074C206.008 29.8118 204.094 29.1641 201.458 29.1641H190.978V43.3259H201.436Z'
                fill='white'
              />
              <path
                d='M221.674 20.4922H256.306V29.2082H232.088V31.9781H254.787V40.3322H232.088V43.1467H256.306V51.8628H221.674V20.4922Z'
                fill='white'
              />
              <path
                d='M258.628 20.4922H281.685C282.279 20.4922 282.846 20.4922 283.382 20.5369C283.918 20.5815 284.669 20.6664 285.616 20.8272C286.513 20.9735 287.395 21.1992 288.252 21.5018C289.14 21.8344 289.987 22.2676 290.776 22.7929C291.639 23.3473 292.401 24.0436 293.032 24.8524C293.707 25.7634 294.221 26.7833 294.551 27.868C294.972 29.212 295.175 30.6145 295.154 32.0227C295.154 36.9667 293.233 40.496 289.391 42.6106L295.824 51.8628L283.807 51.8181L278.446 44.4423H269.037V51.8628H258.628V20.4922ZM280.702 35.284C283.293 35.284 284.588 34.3011 284.588 32.3354C284.588 30.5485 283.233 29.655 280.523 29.655H269.037V35.284H280.702Z'
                fill='white'
              />
              <path
                d='M346.627 41.4491H369.371V51.8628H336.218V20.4922H346.627V41.4491Z'
                fill='white'
              />
              <path
                d='M401.324 20.583L415.397 51.8553H403.335L400.962 46.5792H385.46L383.093 51.8553H371.115L385.148 20.583H401.324ZM389.173 37.5639H397.259L393.193 29.3437L389.173 37.5639Z'
                fill='white'
              />
              <path
                d='M457.4 51.8628H443.189L427.821 32.9609V51.8628H417.407V20.4922H431.931L447.031 39.0813V20.4922H457.4V51.8628Z'
                fill='white'
              />
              <path
                d='M481.885 51.8633H460.303V20.591H481.747C483.554 20.5771 485.36 20.689 487.152 20.9261C488.796 21.1679 490.402 21.6182 491.932 22.2663C493.444 22.8718 494.813 23.7846 495.953 24.9468C497.139 26.2534 498.031 27.7998 498.567 29.4813C499.282 31.6566 499.624 33.9376 499.576 36.2272C499.61 38.3609 499.245 40.4821 498.5 42.4816C497.889 44.1538 496.93 45.6767 495.685 46.9491C494.484 48.1254 493.095 49.0932 491.575 49.8127C490.066 50.5489 488.466 51.0822 486.817 51.3987C485.191 51.7061 483.54 51.8616 481.885 51.8633ZM481.17 43.326C482.629 43.3692 484.075 43.0386 485.37 42.3655C486.456 41.8028 487.344 40.9222 487.916 39.8413C488.468 38.7321 488.744 37.506 488.72 36.2673C488.72 34.123 488.125 32.403 486.933 31.1074C485.742 29.8119 483.828 29.1641 481.193 29.1641H470.734V43.326H481.17Z'
                fill='white'
              />
              <path
                d='M298.696 28.4011H317.924L299.8 46.2754L305.089 51.8553L323.455 33.9318V51.8553H331.269V20.583H298.696V28.4011Z'
                fill='white'
              />
              <rect
                x='10.571'
                y='14.571'
                width='494.439'
                height='42.858'
                stroke='black'
                stroke-width='10.858'
              />
            </svg>
            <svg
              viewBox='0 0 158 72'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full lg:hidden'
            >
              <rect width='157.847' height='72' fill='black' />
              <rect
                x='10.571'
                y='14.571'
                width='136.705'
                height='42.858'
                fill='black'
              />
              <path
                d='M16 20.2021H31.1317V24.5014H20.6849V25.8675H28.8635V30.006H20.6829V34.3273H16V20.2021Z'
                fill='white'
              />
              <path
                d='M40.777 20.0008C41.9056 19.9915 43.0334 20.062 44.1521 20.2118C45.0816 20.3391 45.9922 20.5786 46.8642 20.9249C47.6285 21.2161 48.3232 21.6643 48.9033 22.2408C49.4595 22.8257 49.8812 23.5251 50.1388 24.29C50.4521 25.2251 50.6023 26.207 50.5828 27.193C50.6007 28.1584 50.4686 29.1208 50.1911 30.0457C49.9592 30.7961 49.5756 31.4909 49.064 32.0869C48.5306 32.6749 47.8714 33.135 47.1354 33.4329C46.2703 33.7934 45.362 34.0398 44.4333 34.1662C43.2682 34.3236 42.0933 34.3974 40.9176 34.3871C37.5947 34.3871 35.1799 33.7844 33.6732 32.5791C32.1665 31.3737 31.4131 29.4946 31.4131 26.9419C31.4131 24.5846 32.1832 22.8402 33.7234 21.7084C35.2636 20.5767 37.6148 20.0075 40.777 20.0008ZM40.9578 30.6886C42.3761 30.6886 43.4744 30.4006 44.2525 29.8247C45.0306 29.2488 45.419 28.3716 45.4177 27.193C45.4177 26.0559 45.0092 25.1853 44.1922 24.5813C43.3752 23.9773 42.277 23.6793 40.8975 23.6873C40.2531 23.6771 39.6103 23.7548 38.987 23.9183C38.4894 24.0467 38.0264 24.2834 37.6309 24.6114C37.2826 24.9117 37.0106 25.2904 36.8373 25.7164C36.657 26.1839 36.5683 26.6818 36.5762 27.1829C36.5575 27.6623 36.6472 28.1398 36.8385 28.5798C37.0298 29.0197 37.3178 29.4109 37.6811 29.7243C38.4191 30.3685 39.51 30.6899 40.9537 30.6886H40.9578Z'
                fill='white'
              />
              <path
                d='M60.6076 34.3268C58.5062 34.3268 56.7517 34.1192 55.3441 33.704C53.9364 33.2888 52.9654 32.5722 52.431 31.5544C52.0042 30.6597 51.7389 29.6967 51.6475 28.7096C51.4883 27.0102 51.4213 25.3034 51.4466 23.5968L51.4667 20.2217H56.4088V26.5299C56.4063 26.8891 56.4264 27.248 56.4691 27.6047C56.5221 27.9629 56.627 28.3114 56.7805 28.6393C56.9362 29.0001 57.1734 29.3199 57.4736 29.5735C57.8438 29.861 58.267 30.0726 58.7192 30.1963C59.3356 30.3761 59.9757 30.4615 60.6176 30.4494C61.257 30.4621 61.8946 30.3767 62.5081 30.1963C62.9472 30.0757 63.3573 29.8672 63.7135 29.5835C63.9992 29.3257 64.2225 29.0063 64.3664 28.6494C64.5125 28.3202 64.6106 27.9718 64.6577 27.6147C64.6931 27.2542 64.7098 26.8921 64.7079 26.5299V20.2217H69.65V23.5968C69.687 25.3031 69.6267 27.0102 69.4692 28.7096C69.3778 29.6967 69.1126 30.6597 68.6857 31.5544C68.3999 32.0944 67.9903 32.5591 67.4904 32.9104C66.9254 33.3011 66.2965 33.5901 65.6321 33.7642C64.8818 33.9706 64.1158 34.1151 63.3418 34.1962C62.4334 34.2881 61.5207 34.3316 60.6076 34.3268V34.3268Z'
                fill='white'
              />
              <path
                d='M88.7188 34.3268H82.3383L75.4274 25.8267V34.3268H70.7344V20.2217H77.2656L84.0559 28.5791V20.2217H88.7188V34.3268Z'
                fill='white'
              />
              <path
                d='M99.7103 34.3271H90.0049V20.2642H99.648C100.461 20.2579 101.273 20.3083 102.079 20.4149C102.818 20.5236 103.54 20.7261 104.228 21.0176C104.908 21.2894 105.524 21.6999 106.037 22.223C106.569 22.811 106.97 23.5063 107.212 24.2621C107.532 25.2407 107.685 26.2662 107.664 27.2956C107.678 28.2549 107.515 29.2086 107.182 30.1082C106.906 30.8597 106.475 31.5443 105.916 32.1172C105.375 32.646 104.75 33.0806 104.066 33.403C103.387 33.734 102.668 33.9738 101.926 34.1161C101.196 34.255 100.454 34.3256 99.7103 34.3271V34.3271ZM99.3889 30.4899C100.045 30.509 100.695 30.3596 101.277 30.056C101.766 29.803 102.165 29.407 102.422 28.9209C102.671 28.4221 102.795 27.8707 102.784 27.3137C102.784 26.3494 102.516 25.5759 101.98 24.9933C101.445 24.4107 100.584 24.1194 99.3989 24.1194H94.6979V30.4899H99.3889Z'
                fill='white'
              />
              <path
                d='M108.492 20.2217H124.064V24.1332H113.173V25.3787H123.381V29.1355H113.173V30.4012H124.064V34.3207H108.492V20.2217Z'
                fill='white'
              />
              <path
                d='M125.107 20.2217H135.476C135.743 20.2217 135.998 20.2217 136.239 20.2418C136.58 20.2664 136.918 20.31 137.254 20.3724C137.658 20.4365 138.055 20.5374 138.441 20.6737C138.841 20.8236 139.221 21.0191 139.576 21.2563C139.964 21.5048 140.307 21.8173 140.591 22.1804C140.893 22.5908 141.124 23.0493 141.274 23.5365C141.463 24.1409 141.554 24.7716 141.545 25.4049C141.545 27.6281 140.68 29.2159 138.951 30.1682L141.846 34.3268L136.44 34.3067L134.029 30.9918H129.79V34.3268H125.107V20.2217ZM135.034 26.8714C136.199 26.8714 136.782 26.4294 136.782 25.5455C136.782 24.7419 136.172 24.3401 134.953 24.3401H129.79V26.8714H135.034Z'
                fill='white'
              />
              <path
                d='M20.6829 47.3177H30.9087V52.0006H16V37.8936H20.6829V47.3177Z'
                fill='white'
              />
              <path
                d='M45.2771 37.9336L51.6074 51.9965H46.1772L45.1124 49.6239H38.1412L37.0765 51.9965H31.6924L38.0006 37.9336H45.2771ZM39.8107 45.5677H43.449L41.6208 41.8712L39.8107 45.5677Z'
                fill='white'
              />
              <path
                d='M70.4861 52.0006H64.0975L57.1926 43.5006V52.0006H52.5117V37.8936H59.0349L65.8273 46.2529V37.8936H70.4861V52.0006Z'
                fill='white'
              />
              <path
                d='M81.5042 52.0009H71.7988V37.938H81.442C82.2554 37.9318 83.0684 37.9821 83.8748 38.0887C84.6141 38.1974 85.3364 38.4 86.0244 38.6914C86.7041 38.9636 87.3199 39.374 87.8325 39.8968C88.3653 40.4856 88.766 41.1815 89.0078 41.9379C89.328 42.9165 89.4808 43.942 89.4598 44.9715C89.4748 45.9308 89.3113 46.8845 88.9777 47.784C88.7032 48.536 88.2718 49.2209 87.712 49.793C87.1722 50.322 86.5474 50.7566 85.8637 51.0788C85.1847 51.4111 84.4646 51.6516 83.7222 51.794C82.9907 51.9306 82.2483 51.9999 81.5042 52.0009V52.0009ZM81.1828 48.1617C81.8388 48.1815 82.489 48.0328 83.0712 47.7298C83.5597 47.4763 83.9597 47.0805 84.2184 46.5947C84.4665 46.0959 84.5905 45.5446 84.58 44.9875C84.58 44.0232 84.3068 43.2498 83.7764 42.6672C83.246 42.0846 82.3701 41.7933 81.1928 41.7933H76.4918V48.1617H81.1828Z'
                fill='white'
              />
              <path
                d='M90.4189 41.4493H99.0656L90.9132 49.4873L93.2938 51.9965L101.551 43.9344V51.9965H105.066V37.9336H90.4189V41.4493Z'
                fill='white'
              />
              <rect
                x='10.571'
                y='14.571'
                width='136.705'
                height='42.858'
                stroke='black'
                stroke-width='10.858'
              />
            </svg>
          </div>
          <div className='h-full flex items-end'>
            {icons.energized(
              `w-16 h-16 lg:w-24 lg:h-24  text-fred fill-current`,
              `text-white fill-current`,
              0
            )}
          </div>
        </banner>
      </header>
      <section className='flex flex-col justify-center w-full h-full mx-auto '>
        <div className='flex justify-center bg-fpink w-full'>
          <div className='max-w-2xl flex flex-col pb-5 lg:pb-12 px-5 lg:px-0'>
            <p className='text-center mt-5 lg:mt-12 text-grotesk text-2xl lg:text-2.5xl uppercase font-bold'>
              Welcome to the 2022 Founderland Holiday Gift Guide!
            </p>
            <p className='mt-4 lg:mt-8 text-grotesk font-normal text-base lg:text-xl  text-justify'>
              Kick holiday stress to the curb with one-stop shopping for
              everyone on your list. Find unique products, events and
              experiences, curated and produced by the womxn within the
              Founderland community.{' '}
            </p>
            <p className='mt-4 lg:mt-8 text-grotesk font-normal text-base lg:text-xl'>
              Without further ado… It’s our pleasure to bring you Founderland’s
              Holiday Gift Guide!
            </p>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:grid-rows-5'>
            <div className='lg:row-start-2 lg:row-span-5 lg:col-start-4 lg:col-span-9 text-white bg-black'>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-4'>
                <h1 className=' p-6 text-grotesk font-normal text-base lg:text-xl lg:row-start-4 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  👶👧🧒 It’s all fun and games for the little humans in our
                  lives. You’ll find puzzles, books, dolls, toys and educational
                  activities to keep the tiny minds entertained in 2023 - both
                  to purchase or to rent!
                </h1>
                <div className='px-4 pt-4 lg:row-start-1 lg:row-span-3 lg:col-span-1 lg:col-start-3'>
                  <li className='py-1'>
                    <a
                      href='https://phillyandfriends.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Philly & Friends
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Children's lifestyle & toy brand on a mission to add a
                      drop of colour and diversity to the playroom while
                      empowering literacy in underprivileged children
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.cresory.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Cresory
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      A platform for kids to learn about finance through fun and
                      games.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.tribu-box.com/en'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Tribu Box
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      We at Tribu rent toy boxes, which are filled with
                      montessori inspired. pedagocial toys. We have different
                      subscriptions from 1,6, or 12 months. The toy box can be
                      chosen from the client, depending on how old his/her child
                      is.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-9'>
              <img
                src={littleOnes}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 grid-rows-5'>
            <div className='lg:row-start-1 lg:row-span-4 lg:col-start-1 lg:col-span-9 text-white bg-black '>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5'>
                <h1 className='p-6 text-grotesk font-normal text-base lg:text-xl lg:row-start-1 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  🤟💙 💆 Treat them (and yourself!) to coaching and guided
                  sessions on relationship building, wellness training, and
                  anti-stress practices.
                </h1>
                <div className='px-4 pt-4 lg:row-start-2 lg:row-span-4 lg:col-span-1 lg:col-start-1'>
                  <li className='py-1'>
                    <a
                      href='https://www.unwindyourmind.de/en/onlinegym'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      UNWINDYOURMIND
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      A membership to the Antistress Academy, where you'll learn
                      how to cope with stress. Learn different methods and get
                      access to our physical and mental health online studio.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.powermindclub.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Power Mind Club
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      1:1 online relationship coaching session with one of our
                      experts.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.mogamiwellness.com/about'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Mogami
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Empowering individuals to achieve sustainable personal
                      wellness lives through transformative customer-centric
                      Japanese wellness services. Explore Mogami's wellness
                      services that can strengthen you, your organization, and
                      your community's well-being from the inside out. Offering
                      group wellness events, 1:1 Coaching, and online courses.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-2 lg:row-span-4 lg:col-start-4 lg:col-span-9'>
              <img
                src={seflCare}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:grid-rows-6'>
            <div className='lg:row-start-2 lg:row-span-5 lg:col-start-4 lg:col-span-9 text-white bg-black'>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5'>
                <h1 className=' p-6 text-grotesk font-normal text-base lg:text-xl lg:row-start-5 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  🐱🪴🏡 We all know that people with a cozy home, great decor
                  taste and a furry friend to cuddle up with. This list is for
                  them!
                </h1>
                <div className='px-4 pt-4 lg:row-start-1 lg:row-span-4 lg:col-span-1 lg:col-start-3'>
                  <li className='py-1'>
                    <a
                      href='https://gubns.co/people/atelier-hen'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Atelier Hen
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Atelier Hen explores the hand-tufting technique of needle
                      punching to create topographic landscapes on miniature
                      rugs, wall tapestries as well as small pouche
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://kusuka.org/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Kusuka
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      At Kusuka, we work with women artisans and enterpreneurs
                      from Kenya, Uganda, and Senegal to create beautiful
                      collections of handwoven baskets. The handmade baskets are
                      made from the natural sisal-fibre and you can even create
                      your custom basket with your preferred style.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.feniska.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Feniska
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      An all-new way to monitor your pet’s health! Automatically
                      track weight, sleep and daily patterns.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-9'>
              <img
                src={home}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 grid-rows-6'>
            <div className='lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-9 text-white bg-black '>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5'>
                <h1 className='p-6 text-grotesk font-normal text-base lg:text-xl lg:row-start-1 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  📲 ✈️ 📅 This list is for the doers: For the people who can
                  not stop doing, learning, and growing and somehow keep it all
                  together.
                </h1>
                <div className='px-4 pt-4 lg:row-start-2 lg:row-span-4 lg:col-span-1 lg:col-start-1'>
                  <li className='py-1'>
                    <a
                      href='https://africapodcastfestival.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Africa Podcast Day 2023
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Tickets to Africa’s biggest podcast festival during the
                      2023 edition of Africa Podcast Day!
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://miniglotte.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Miniglotte
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      “Welcome to Our Family” is a set of 30+ cards that help
                      immortalize the special things about your family. Not only
                      do we help you record the usual memories like the first
                      bath, first tooth or first haircut, but we also help you
                      reflect on your family traditions with specific questions.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='http://www.playroom-app.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      playroom-app
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Playroom is an app with a subscription service that lets
                      you manage your entire family life at your fingertips.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-2 lg:row-span-5 lg:col-start-4 lg:col-span-9'>
              <img
                src={happenings}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 grid-rows-6'>
            <div className='lg:row-start-2 lg:row-span-5 lg:col-start-4 lg:col-span-9 text-white bg-black'>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-4'>
                <h1 className='p-6 mt-1 text-grotesk font-normal text-base lg:text-xl lg:row-start-4 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  ⛰🚴‍♀️🌻 For outdoor lovers, flower-children, and
                  adventure-seekers! Enjoy everything from city-tours, curated
                  vacation homes and subscriptions to grow your garden.
                </h1>
                <div className='px-4 pt-4 lg:row-start-1 lg:row-span-3 lg:col-span-1 lg:col-start-3'>
                  <li className='py-1'>
                    <a
                      href='https://www.staycationcollection.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Staycation Collection
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      A travel agency for the digital age. Give a membership to
                      a curated collection of 150+ cabins, hotels and
                      Ferienwohnungen, as well as personalised recommendations
                      of where to go.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='http://www.bloommag.co.uk/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Bloom Magazine
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Books, Magazine subscriptions, and all things flowers!
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.zewdi.de/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Zewdi
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      An Afrodiaspora-friendly travel company ensures more
                      inclusion. For this reason, my company focuses on travel
                      for PoC and aims to create a safe place for black
                      travelers. Book tours and experiences!
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-9'>
              <img
                src={adventure}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 grid-rows-5'>
            <div className='lg:row-start-1 lg:row-span-4 lg:col-start-1 lg:col-span-9 text-white bg-black '>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5'>
                <h1 className='p-6 text-grotesk font-normal text-base lg:text-xl lg:row-start-1 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  💃💅🕺 From hair to health, to coaching and clothes… these
                  gifts are for those who love to pamper and prosper!
                </h1>
                <div className='px-4 pt-4 lg:row-start-2 lg:row-span-4 lg:col-span-1 lg:col-start-1'>
                  <li className='py-1'>
                    <a
                      href='https://otjnaturals.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Otj naturals
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      OTJ Naturals, an hair and skincare brand who supplies
                      organic products suitable for all hair and skin types.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://root2tip.co.uk/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      root2tip
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      ROOT2TiP is a company specialising in the manufacturing of
                      naturally inspired Haircare products, the focus being on
                      natural as I believe strongly in the power of Mother
                      Nature and the dangers of unnecessary chemicals.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='http://www.nbefitness.com/yic'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      NBE NATION Sessions
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      1:1 and group sessions on an accessible wellbeing platform
                      making it easy and fun to look after your health.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://jedid.fr/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Jedid
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Transform, edit, create. Enjoy upcycled clothing creations
                      and/or find a seamstress near you who will help you
                      redesign and reinvent pre-loved clothing.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-2 lg:row-span-4 lg:col-start-4 lg:col-span-9'>
              <img
                src={beautyBody}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto lg:mt-8'>
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 grid-rows-6'>
            <div className='lg:row-start-2 lg:row-span-5 lg:col-start-4 lg:col-span-9 text-white bg-black'>
              <div className='p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5'>
                <h1 className='p-6 mt-1 text-grotesk font-normal text-base lg:text-xl lg:row-start-5 lg:row-span-1 lg:col-span-full lg:col-start-1 text-justify'>
                  🍷🫖🍰 This list has something for literally everyone: For the
                  foodies, cocktail lovers, wine-o’s, bio-babes, and more! You
                  may even find something to #treatyoself this holiday season.
                </h1>
                <div className='px-4 pt-4 lg:row-start-1 lg:row-span-3 lg:col-span-1 lg:col-start-3'>
                  <li className='py-1'>
                    <a
                      href='https://www.noguiltbakes.co.uk/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      No Guilt Bakes
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Low carb and keto treats that are deliciously tasty and
                      conveniently packaged.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='http://www.vintrail.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Vintrail
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Offering a selection of French wines from our SaaS
                      marketplace. Wine experiences and wine market with over
                      1,000 wines!
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://vouchers.greenwichpantry.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Greenwich pantry
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Cooking gifts and gift vouchers for all kind of
                      food-lovers!
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.theenk-tea.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      THEENK TEA
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Teas and wellness gift boxes, created by nature & backed
                      by science
                    </p>
                  </li>
                </div>
                <div className='flex flex-col lg:flex-row lg:space-x-4 px-4 pt-4 lg:row-start-4 lg:row-span-1 lg:col-span-full lg:col-start-1'>
                  <li className='py-1'>
                    <a
                      href='https://ikook.co.uk/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      iKooK
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Easy way to book an affordable #privatechef that will
                      cater to your needs. (UK)
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://calenodrinks.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Caleño Drinks
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      Fuelled by Latin positivity, Ellie Webb set out to infuse
                      the sun-drenched flavours of Colombia with her
                      non-alcoholic spirits.
                    </p>
                  </li>
                  <li className='py-1'>
                    <a
                      href='https://www.erazerowaste.com/'
                      rel='noreferrer'
                      target='_blank'
                      className='underline uppercase font-bold'
                    >
                      Era Zero Waste
                    </a>
                    <p className='text-xs text-justify pt-1'>
                      ERA prepared a zero waste xmas box full of organic and
                      regional products directly from producers. Era is the
                      organic box for all your groceries. Zero Waste. Customize
                      your box and get it delivered weekly, directly from the
                      source in reusable or plastic-free packaging.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-9'>
              <img
                src={foodDrinks}
                alt=''
                className='object-cover w-full shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>
      <footer className='md:px-4 lg:px-8 pt-4 bg-black text-white w-full flex flex-col lg:mt-8'>
        <links className='w-full flex flex-grow text-grotesk uppercase p-5 text-sm tracking-wider space-x-8'>
          <div className='flex flex-col space-y-2'>
            <div className='text-grotesk-b font-bold'>Founderland</div>
            <a
              href='https://www.founderland.org/our-manifesto'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Manifesto
            </a>
            <a
              href='https://www.founderland.org/faq'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Faq
            </a>
            <a
              href='https://www.founderland.org/about'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Our Values
            </a>
            <a
              href='https://medium.com/@founderland'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              News
            </a>
            <a
              href='https://www.founderland.org/contact'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Contact
            </a>
            <a
              href='https://www.founderland.org/careers'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Careers
            </a>
            <a
              href='https://www.founderland.org/impressum'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Impressum
            </a>
            <a
              href='https://www.founderland.org/privacy-policy'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Privacy Policy
            </a>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='text-grotesk-b font-bold'>Follow Us</div>

            <a
              href='https://www.linkedin.com/company/founderland'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              LinkedIn
            </a>

            <a
              href='https://www.instagram.com/founderland_/'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              Instagram
            </a>

            <a
              href='https://twitter.com/founderland_/'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
              target='_blank'
            >
              Twitter
            </a>

            <a
              href='https://thisisfounderland.substack.com'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
              target='_blank'
            >
              Substack
            </a>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='text-grotesk-b font-bold'>Community</div>
            <a
              href='https://founderland.herokuapp.com/form/founder'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              Apply as Founder
            </a>

            <a
              href='https://founderland.herokuapp.com/form/investor'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              Apply as Investor
            </a>

            <a
              href='https://founderland.herokuapp.com/form/ally'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              Apply as Ally
            </a>

            <a
              href='/partners'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Partners
            </a>

            <a
              href='https://founderland.herokuapp.com/newsletter'
              target='_blank'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
              rel='noreferrer'
            >
              Newsletter
            </a>

            <a
              href='/support'
              className='max-w-xs hover:text-gray-500 transform ease-in-out duration-200'
            >
              Donate
            </a>
          </div>
        </links>
        <p className='w-full text-center text-mono text-xs my-4'>
          © {year} Founderland gUG (haftungsbeschränkt)
        </p>
      </footer>
    </div>
  )
}

export default App
