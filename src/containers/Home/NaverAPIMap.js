import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, GroundOverlay,Marker } from 'react-naver-maps';
import DaumPostcode from 'react-daum-postcode';


const onSuccessGeolocation = (props) => {
  var map = new window.naver.maps.Map('map', {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399), //지도의 초기 중심 좌표
    zoom: 13, //지도의 초기 줌 레벨
    minZoom: 7, //지도의 최소 줌 레벨
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: { //줌 컨트롤의 옵션
        position: window.naver.maps.Position.TOP_RIGHT
    }
  });
  var infowindow = new window.naver.maps.InfoWindow();
  var location = new window.naver.maps.LatLng(props.coords.latitude,props.coords.longitude);
  map.setCenter(location);
  map.setZoom(10);
  infowindow.setContent('<div style="padding:20px;">' + 'geolocation.getCurrentPosition() 위치' + '</div>');
  infowindow.open(map, location);
  console.log('Coordinates: ' + location.toString());
}

const onErrorGeolocation = () => {
  var map = new window.naver.maps.Map('map', {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399), //지도의 초기 중심 좌표
    zoom: 13, //지도의 초기 줌 레벨
    minZoom: 7, //지도의 최소 줌 레벨
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: { //줌 컨트롤의 옵션
        position: window.naver.maps.Position.TOP_RIGHT
    }
  });
  var infowindow = new window.naver.maps.InfoWindow();
  var center = map.getCenter();

  infowindow.setContent('<div style="padding:20px;">' +
      '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>'+ "latitude: "+ center.lat() +"<br />longitude: "+ center.lng() +'</div>');

  infowindow.open(map, center);
}
// $(window).on("load", function() {
//   if (navigator.geolocation) {
//       /**
//        * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
//        * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
//        * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
//        */
//       navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
//   } else {
//       var center = map.getCenter();
//       infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
//       infowindow.open(map, center);
//   }
// });
const NaverMapAPI = () => {
  const navermaps = window.naver.maps;

  // var map = new window.naver.maps.Map('map', {
  //   center: new window.naver.maps.LatLng(37.3595704, 127.105399), //지도의 초기 중심 좌표
  //   zoom: 13, //지도의 초기 줌 레벨
  //   minZoom: 7, //지도의 최소 줌 레벨
  //   zoomControl: true, //줌 컨트롤의 표시 여부
  //   zoomControlOptions: { //줌 컨트롤의 옵션
  //       position: window.naver.maps.Position.TOP_RIGHT
  //   }
  // });
  // const infowindow = new window.naver.maps.InfoWindow();
  //   if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
  //   }
  //   else {
  //     var center = map.getCenter();
  //     infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
  //     infowindow.open(map, center);
  //   }
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '85vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 36.13654, lng: 128.39795 }} // 지도 초기 위치
        defaultZoom={15} // 지도 초기 확대 배율
      >

        <Marker
          key={1}
          position={new navermaps.LatLng(36.13654, 128.39795)}
          animation={2}
          onClick={() => {alert('여기는 어디일까요??');}}
        />
        <GroundOverlay 
        bounds={new navermaps.LatLngBounds(
          new navermaps.LatLng(36.634249797, 127.129160067),
          new navermaps.LatLng(36.734249797, 127.410516004)
        )}
        url={'https://navermaps.github.io/maps.js/docs/img/example/naver-satellite.png'}
        clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
        onClick={() => {
          alert('여기는 한라산 입니다.')
        }}
      />
      </NaverMap>
    );
  }
  
const Map = () => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'znqmhdeniu'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}  

export default Map;



//   function NaverMapAPI(props) {
//     const id = props.id;
//     //지도를 그릴때 하나의 지도 컴포넌트 Div id와 naver javascript api와 연결되어 있으므로 아래와 같이 div ID를 구별해주어야한다. 
//     //각각의 컴포넌트 별로 고유한 아이디값을 부여받아야 여러개의 dynamic 지도가 표시된다.
//     return (
//       <NaverMap
//         //mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
//         mapDivId={"mapId" + { id }}
//         style={{
//           width: '100%', // 네이버지도 가로 길이
//           height: '85vh' // 네이버지도 세로 길이
//         }}
//         defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
//         defaultZoom={13} // 지도 초기 확대 배율
//       />
//     );
//   }
  
//   function Map() {
//     return (
//       <RenderAfterNavermapsLoaded
//         ncpClientId={'znqmhdeniu'} // 자신의 네이버 계정에서 발급받은 Client ID
//         error={<p>Maps Load Error</p>}
//         loading={<p>Maps Loading...</p>}
//       >
//         <NaverMapAPI id="1"/>
//         <NaverMapAPI id="2"/>
//       </RenderAfterNavermapsLoaded>
//     );
//   }
  
//   export default Map;

// import React from "react";
// import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

// export const NaverAPIMap = (props) => {
//   //const navermaps = window.naver.maps;
//   //const mapRef = useRef(null);
//   return (
//     <RenderAfterNavermapsLoaded
//       ncpClientId={"znqmhdeniu"}
//       //ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
//       // 네이버 클라우드에서 받은 client id를 적어야 한다.
//       // 필자는 환경변수 이용
//       error={<p>Maps Load Error</p>}
//       loading={<p>Maps Loading...</p>}
//       >
//       <p>Navermaps Loaded!!</p>
//       <NaverMap
//         // mapDivId="map"
//         id={"map"}
//         mapDivId={"react-naver-map"}
//         defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
//         //naverRef={mapRef}
//         defaultZoom={16}
//         zoomControl={true} // 지도 zoom 허용
//       >
//         {/* <Marker
//           key={1}
//           position={new navermaps.LatLng(37.49988, 127.03856)}
//           animation={2}
//           onClick={() => {alert('여기는 어디일까요??');}}
//           /> */}
//       </NaverMap>
//     </RenderAfterNavermapsLoaded>
//   );
// };

// export default NaverAPIMap;