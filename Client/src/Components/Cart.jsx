import "../Styles/Navbar.css";
import { CloseOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/cartContext";
import CartItem from "./CartItem";

const Cart = ({ cartDrawerStyle, cartToggle }) => {

  const { cart, totalItem, totalPrice } = useCartContext();
  const finalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <div className="cart-drawer" style={cartDrawerStyle}>
      <form>
        <div className="cart-header">
          <div className="cart-title">
            Cart
            {totalItem !== 0 && (
              <span className="cart-num">{totalItem}</span>
            )}
          </div>
          <span className="cart-close-btn" onClick={cartToggle}>
            <CloseOutlined />
          </span>
        </div>
        <div className="cart-products-wrapper">
          <div className="cart-middle">
            {cart &&
              cart.map((item, index) => {
                return (
                <CartItem item={item} index={index} cartToggle={cartToggle} />
                );
              })}
            <div className="cda-wrapper">
              <div className="cda-header">
                <span className="cda-title">Consider adding</span>
                <span className="cda-hide">
                  <MinusOutlined />
                </span>
              </div>
              <div className="cda-items">
                <div className="item-card">
                  <div>
                    <Link>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0515/3633/0928/files/Jasha.7002310_night_01.jpg?v=1689693917"
                        alt="cda-card"
                        className="card-item-image"
                      />
                    </Link>
                  </div>
                  <div className="item-card-meta">
                    <Link>Jasha shopper</Link>
                    <span>€41,99</span>
                  </div>
                </div>
                <div className="item-card">
                  <div>
                    <Link>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0515/3633/0928/files/Jasha.7002310_night_01.jpg?v=1689693917"
                        alt="cda-card"
                      />
                    </Link>
                  </div>
                  <div className="item-card-meta">
                    <Link>Jasha shopper</Link>
                    <span>€41,99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-footer">
            <div className="item-discount">
              <input type="text" placeholder="Discount..." />
              <span>Apply</span>
            </div>
            <div className="item-total">
              <h4>Total</h4>
              <span>€{finalPrice}</span>
            </div>
            <button type="submit" className="item-checkout-btn">
              check out
            </button>
            <ul className="cart-payments-cards">
              <li>
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m5.849 11.047c-.376.448-.975.803-1.573.751-.079-.604.219-1.251.563-1.652.375-.457 1.031-.785 1.563-.812.063.631-.183 1.251-.552 1.713zm.547.87c-.869-.053-1.615.499-2.027.499-.421 0-1.052-.473-1.739-.457-.891.011-1.724.52-2.177 1.339-.943 1.629-.245 4.041.661 5.369.443.656.973 1.375 1.672 1.355.661-.027.927-.437 1.724-.437.807 0 1.036.437 1.74.421.723-.011 1.181-.656 1.624-1.312.505-.745.713-1.475.724-1.511-.011-.016-1.401-.552-1.411-2.167-.011-1.355 1.093-2 1.14-2.037-.62-.937-1.599-1.036-1.932-1.061zm5.016-1.834v9.855h1.515v-3.369h2.095c1.911 0 3.255-1.328 3.255-3.245 0-1.921-1.317-3.24-3.203-3.24zm1.515 1.292h1.745c1.312 0 2.063.708 2.063 1.953s-.751 1.959-2.073 1.959h-1.735zm8.109 8.636c.953 0 1.833-.484 2.235-1.256h.032v1.183h1.4v-4.907c0-1.416-1.124-2.337-2.859-2.337-1.604 0-2.792.932-2.833 2.208h1.359c.115-.609.667-1.005 1.433-1.005.927 0 1.443.437 1.443 1.24v.541l-1.885.115c-1.761.109-2.709.833-2.709 2.099 0 1.276.98 2.12 2.385 2.12zm.412-1.167c-.808 0-1.323-.391-1.323-.989 0-.62.495-.985 1.437-1.043l1.683-.104v.557c0 .923-.776 1.579-1.803 1.579zm5.125 3.776c1.473 0 2.167-.573 2.771-2.297l2.656-7.531h-1.536l-1.781 5.817h-.032l-1.781-5.817h-1.583l2.563 7.172-.136.437c-.235.735-.609 1.02-1.276 1.02-.12 0-.349-.015-.443-.025v1.183c.088.025.464.036.573.036z" />
                </svg>
              </li>
              <li>
                <svg
                  height="102"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 102"
                  width="256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m121.003082 49.7959599v29.7813115h-9.447864v-73.54663577h25.057379c6.041196-.1261936 11.882523 2.16597276 16.22568 6.36703897 4.394275 3.9526009 6.865473 9.6117517 6.777816 15.5214914.125859 5.9427479-2.349742 11.6441326-6.777816 15.609515-4.381618 4.178186-9.790178 6.2653229-16.22568 6.2614107h-15.609515zm0-34.7106319v25.6735443h15.844245c3.512252.1041086 6.905842-1.2763346 9.348104-3.8026187 2.427444-2.3600188 3.796982-5.6016243 3.796982-8.9872076 0-3.3855832-1.369538-6.6271887-3.796982-8.9872075-2.412642-2.5805781-5.816763-4.0016332-9.348104-3.9023788h-15.844245zm60.384177 12.5286896c6.983204 0 12.495436 1.8660999 16.536696 5.5982997 4.041261 3.7321999 6.059935 8.849304 6.056023 15.3513125v31.0136416h-9.037088v-6.9832041h-.410777c-3.912159 5.750874-9.115331 8.6263109-15.609515 8.6263109-5.543529 0-10.181394-1.6431068-13.913594-4.9293205-3.627359-3.0545864-5.684053-7.5819005-5.598299-12.3233013 0-5.2070838 1.967816-9.3481042 5.903448-12.4230613s9.189662-4.6163478 15.762089-4.6241721c5.610036 0 10.230296 1.0269417 13.86078 3.0808253v-2.1595119c.021664-3.2321531-1.411266-6.3027166-3.902379-8.3622401-2.498424-2.2541194-5.75448-3.4840453-9.119243-3.4446561-5.277503 0-9.453733 2.2260185-12.52869 6.6780556l-8.321162-5.2403372c4.577226-6.5724273 11.35113-9.858641 20.321711-9.858641zm-12.223542 36.5591272c-.012852 2.4396694 1.154511 4.7350462 3.13364 6.1616506 2.08955 1.6436641 4.683088 2.5143963 7.341166 2.4646603 3.986854-.0066626 7.808473-1.5935525 10.627381-4.4129155 3.129727-2.9458559 4.694591-6.4022485 4.694591-10.3691778-2.945856-2.3472955-7.053623-3.5209433-12.323302-3.5209433-3.837828 0-7.037974.9252257-9.600438 2.775677-2.587893 1.8778363-3.873038 4.1605812-3.873038 6.9010487zm86.691491-34.9160204-31.547652 72.5020896h-9.753012l11.707136-25.3683962-20.744224-47.1336934h10.269418l14.99335 36.1483505h.205388l14.582573-36.1483505z"
                    fill="#5f6368"
                  />
                  <path
                    d="m82.8243212 43.3761068c.0035626-2.8792398-.2398838-5.753478-.7276616-8.5911015h-39.8453409v16.272626h22.8215804c-.9436651 5.2517924-3.9920272 9.8900512-8.4385273 12.8397063v10.5628296h13.620182c7.9749365-7.3529031 12.5697674-18.2267494 12.5697674-31.0840604z"
                    fill="#4285f4"
                  />
                  <path
                    d="m42.2513187 84.6650344c11.4019878 0 21.0024264-3.7439363 28.0032351-10.1989989l-13.620182-10.5628297c-3.7908822 2.5702886-8.6732568 4.0373482-14.3830531 4.0373482-11.0205523 0-20.3745248-7.4291902-23.7194209-17.4404054h-14.03095871v10.8855828c7.17189081 14.2713043 21.77833711 23.278575 37.75037961 23.279303z"
                    fill="#34a853"
                  />
                  <path
                    d="m18.5318978 50.5001486c-1.7683265-5.2459449-1.7683265-10.926921 0-16.1728659v-10.8855828h-14.03095871c-5.99868462 11.9367481-5.99868462 26.0072834 0 37.9440315z"
                    fill="#fbbc04"
                  />
                  <path
                    d="m42.2513187 16.8868772c6.0254343-.0984396 11.8476033 2.1781507 16.2080753 6.3376979l12.0592306-12.0592306c-7.6468078-7.1822793-17.7771299-11.12547089-28.2673059-11.00294758-15.9720425.00072794-30.5784888 9.00799866-37.75037961 23.27930298l14.03095871 10.8855828c3.3448961-10.0112152 12.6988686-17.4404055 23.7194209-17.4404055z"
                    fill="#ea4335"
                  />
                </svg>
              </li>
              <li>
                <svg
                  height="471"
                  viewBox="0 0 750 471"
                  width="750"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path
                      d="m697.115385 0h-644.2307696c-29.1605769 0-52.8846154 23.1955749-52.8846154 51.7065868v367.5868262c0 28.511012 23.7240385 51.706587 52.8846154 51.706587h644.2307696c29.158653 0 52.884615-23.195575 52.884615-51.706587v-367.5868262c0-28.5110119-23.725962-51.7065868-52.884615-51.7065868z"
                      fill="#fff"
                    />
                    <g transform="translate(54 150)">
                      <path
                        d="m109.272795 8.45777679c-8.024045-5.51623215-18.4947593-8.28103572-31.4121432-8.28103572h-50.009125c-3.9599554 0-6.1477232 1.98045536-6.5633036 5.93658929l-20.31566963 127.52489264c-.21113393 1.252473.10222322 2.397947.93720536 3.439286.83020536 1.04325 1.87441071 1.562009 3.12497321 1.562009h23.75399996c4.1663125 0 6.4563036-1.975679 6.8766608-5.937545l5.6251428-34.3794819c.2054018-1.6661429.9381607-3.0208393 2.1887232-4.0640893 1.2496072-1.0413393 2.8125715-1.7225089 4.6879375-2.0349107 1.8753661-.3095357 3.6437322-.465259 5.3136965-.465259 1.6651875 0 3.6437321.1050893 5.9394553.3124018 2.2899911.2082679 3.7497768.3095357 4.3755357.3095357 17.9186786 0 31.9834465-5.0490625 42.1952591-15.1576964 10.207036-10.1048125 15.316286-24.1170357 15.316286-42.0395357 0-12.2925804-4.014411-21.2003304-12.034634-26.72516071zm-25.7850896 38.29071431c-1.0451608 7.2941518-3.7507322 12.0843125-8.1262679 14.3771696-4.3764911 2.2957232-10.6273929 3.4364197-18.7527054 3.4364197l-10.314991.3133571 5.3146518-33.4441875c.414625-2.2899911 1.768366-3.4364196 4.0621785-3.4364196h5.9404107c8.3307143 0 14.3771697 1.2008839 18.1279018 3.5930982 3.7488215 2.3979464 4.999384 7.4536964 3.7488215 15.1605625z"
                        fill="#003087"
                      />
                      <path
                        d="m637.026411.17674107h-23.127286c-2.297634 0-3.65042 1.14642857-4.063134 3.43833036l-20.31758 130.02315157-.313357.624804c0 1.047071.417491 2.032044 1.252473 2.970205.82925.93625 1.875366 1.40533 3.124018 1.40533h20.630937c3.953268 0 6.141991-1.975678 6.564259-5.937544l20.31567-127.83825014v-.31049107c-.000956-2.91670536-1.359473-4.37553572-4.066-4.37553572z"
                        fill="#009cde"
                      />
                      <path
                        d="m357.599732 50.4973125c0-1.0394286-.419402-2.0310893-1.247696-2.9673393-.835938-.9372053-1.775054-1.4081964-2.813527-1.4081964h-24.067357c-2.296679 0-4.171089 1.0470714-5.626098 3.1249732l-33.130831 48.7614286-13.751411-46.8841518c-1.046116-3.3322857-3.337062-5.00225-6.87666-5.00225h-23.444465c-1.044205 0-1.982366.4700357-2.81066 1.4081964-.835938.93625-1.250563 1.9288661-1.250563 2.9673393 0 .4203571 2.032045 6.5642589 6.094223 18.4412589 4.062179 11.8789107 8.43867 24.6940715 13.127563 38.4483486 4.688893 13.750455 7.134607 21.047473 7.344786 21.875768-17.087518 23.339375-25.629366 35.842133-25.629366 37.506366 0 2.711303 1.353741 4.064089 4.063134 4.064089h24.067357c2.291901 0 4.166312-1.039429 5.626098-3.124018l79.70258-115.0240446c.414625-.414625.622893-1.1406965.622893-2.1877679z"
                        fill="#003087"
                      />
                      <path
                        d="m581.704545 46.1217768h-23.755911c-2.918616 0-4.685072 3.4383303-5.309875 10.3149911-5.423563-8.3307143-15.31533-12.5037143-29.695366-12.5037143-15.002929 0-27.768411 5.6270535-38.287848 16.87925-10.524215 11.2531518-15.783456 24.4867589-15.783456 39.6960444 0 12.296402 3.593098 22.088813 10.781206 29.379143 7.189062 7.297973 16.82575 10.939795 28.914839 10.939795 6.040723 0 12.187491-1.252473 18.438393-3.750732 6.251857-2.50017 11.144241-5.832456 14.692437-10.001634 0 .209223-.212089 1.145473-.625759 2.811616-.420357 1.669964-.625759 2.922437-.625759 3.750732 0 3.338018 1.350875 5.000339 4.06409 5.000339h21.568143c3.953267 0 6.248991-1.975678 6.872839-5.937544l12.816116-81.5769916c.205402-1.2505625-.107-2.3950803-.938161-3.4383303-.835937-1.040384-1.875366-1.5629643-3.125928-1.5629643zm-40.788018 61.5746782c-5.313697 5.209563-11.720322 7.812911-19.221786 7.812911-6.0455 0-10.937884-1.664232-14.690527-5.000339-3.751687-3.328464-5.627053-7.913223-5.627053-13.7523663 0-7.7049553 2.604303-14.2204911 7.814821-19.5341875 5.20383-5.3136964 11.668732-7.9705446 19.37942-7.9705446 5.828634 0 10.674205 1.7196428 14.532893 5.1570178 3.852 3.4383304 5.783732 8.1807232 5.783732 14.2233572-.000956 7.5005089-2.658759 13.8574554-7.9715 19.0641514z"
                        fill="#009cde"
                      />
                      <path
                        d="m226.639375 46.1217768h-23.754c-2.921482 0-4.688893 3.4383303-5.314652 10.3149911-5.626098-8.3307143-15.524553-12.5037143-29.693455-12.5037143-15.002929 0-27.767455 5.6270535-38.288804 16.87925-10.524214 11.2531518-15.783455 24.4867589-15.783455 39.6960444 0 12.296402 3.595009 22.088813 10.784071 29.379143 7.189063 7.297973 16.82384 10.939795 28.911018 10.939795 5.8315 0 11.877956-1.252473 18.127902-3.750732 6.250902-2.50017 11.252196-5.832456 15.002929-10.001634-.835938 2.500169-1.250563 4.688893-1.250563 6.562348 0 3.338018 1.353741 5.000339 4.063134 5.000339h21.566232c3.956134 0 6.250902-1.975678 6.876661-5.937544l12.814205-81.5769916c.205402-1.2505625-.107-2.3950803-.937205-3.4383303-.834027-1.040384-1.874411-1.5629643-3.124018-1.5629643zm-40.788973 61.7294462c-5.314652 5.111161-11.829232 7.658143-19.534188 7.658143-6.046455 0-10.891071-1.664232-14.534803-5.000339-3.648509-3.328464-5.470375-7.913223-5.470375-13.7523663 0-7.7049553 2.603348-14.2204911 7.814821-19.5341875 5.205741-5.3136964 11.665866-7.9705446 19.378464-7.9705446 5.8315 0 10.676116 1.7196428 14.534804 5.1570178 3.852 3.4383304 5.781821 8.1807232 5.781821 14.2233572 0 7.7097321-2.656848 14.1192234-7.970544 19.2189194z"
                        fill="#003087"
                      />
                      <path
                        d="m464.337964 8.45777679c-8.023089-5.51623215-18.491893-8.28103572-31.411187-8.28103572h-49.696723c-4.170134 0-6.462992 1.98045536-6.876661 5.93658929l-20.31567 127.52393764c-.211134 1.252473.101268 2.397946.937206 3.439286.827339 1.04325 1.87441 1.562009 3.124973 1.562009h25.62841c2.50017 0 4.166313-1.352786 5.001295-4.062179l5.627054-36.2548483c.206357-1.6661428.93625-3.0208393 2.187768-4.0640893 1.250562-1.0413393 2.811616-1.7225089 4.688892-2.0349107 1.874411-.3095357 3.642777-.4652589 5.313697-.4652589 1.665187 0 3.643732.1050893 5.936589.3124018 2.291902.2082678 3.754554.3095357 4.375536.3095357 17.921544 0 31.984402-5.0490625 42.196214-15.1576964 10.209902-10.1048125 15.31533-24.1170358 15.31533-42.0395358.000956-12.291625-4.0125-21.199375-12.032723-26.72420531zm-32.036946 51.41732141c-4.584759 3.1249732-11.46142 4.6869822-20.628072 4.6869822l-10.002589.3133571 5.314652-33.4441875c.412714-2.2899911 1.766455-3.4364196 4.062178-3.4364196h5.624188c4.582848 0 8.229446.2082678 10.942661.6238482 2.704616.4203571 5.312741 1.7186875 7.81291 3.9064553 2.502081 2.1887232 3.750733 5.3671965 3.750733 9.5344643 0 8.7510714-2.294768 14.6886161-6.876661 17.8155z"
                        fill="#009cde"
                      />
                    </g>
                  </g>
                </svg>{" "}
                <li></li>
              </li>
              <li>
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="7" cy="12" fill="#ea001b" r="7" />
                    <circle
                      cx="17"
                      cy="12"
                      fill="#ffa200"
                      fill-opacity=".8"
                      r="7"
                    />
                  </g>
                </svg>
              </li>
              <li>
                <svg
                  enable-background="new 0 0 780 500"
                  height="500"
                  viewBox="0 0 780 500"
                  width="780"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m216.4 69.791h142.39c19.87 0 32.287 16.406 27.63 36.47l-66.333 287.48c-4.656 20.063-24.629 36.47-44.498 36.47h-142.39c-19.87 0-32.287-16.406-27.63-36.47l66.331-287.48c4.657-20.168 24.526-36.47 44.395-36.47h.104z"
                    fill="#d10429"
                  />
                  <path
                    d="m346.34 69.791h163.82c19.867 0 10.865 16.406 6.209 36.47l-66.334 287.48c-4.658 20.063-3.209 36.47-23.078 36.47h-163.81c-19.972 0-32.287-16.406-27.527-36.47l66.334-287.48c4.656-20.168 24.524-36.47 44.498-36.47h-.104z"
                    fill="#022e64"
                  />
                  <path
                    d="m504.41 69.791h142.39c19.869 0 32.287 16.406 27.631 36.47l-66.334 287.48c-4.656 20.063-24.629 36.47-44.498 36.47h-142.39c-19.973 0-32.288-16.406-27.631-36.47l66.334-287.48c4.656-20.168 24.525-36.47 44.393-36.47z"
                    fill="#076f74"
                  />
                  <g fill="#fefefe">
                    <path d="m480.5 340.81h13.453l3.828-13.063h-13.35zm10.762-35.95-4.658 15.467s5.072-2.613 7.865-3.449c2.795-.627 6.934-1.15 6.934-1.15l3.207-10.763h-13.451zm6.726-22.153-4.449 14.839s4.967-2.3 7.76-3.029c2.795-.732 6.934-.941 6.934-.941l3.207-10.764h-13.348zm29.7 0-17.385 57.997h4.656l-3.621 12.018h-4.658l-1.137 3.657h-16.559l1.139-3.657h-33.529l3.311-11.076h3.416l17.594-58.938 3.518-11.913h16.867l-1.76 5.956s4.449-3.239 8.797-4.39c4.244-1.148 28.666-1.566 28.666-1.566l-3.623 11.809h-5.795z" />
                    <path d="m534.59 270.79h18.006l.207 6.792c-.102 1.149.828 1.672 3.002 1.672h3.621l-3.311 11.183h-9.729c-8.381.627-11.59-3.03-11.383-7.106l-.311-12.437zm2.217 53.2h-17.178l2.896-9.927h19.662l2.793-9.092h-19.35l3.311-11.182h53.812l-3.312 11.182h-18.109l-2.793 9.092h18.109l-3.002 9.927h-19.559l-3.518 4.18h7.969l1.965 12.54c.207 1.254.207 2.09.621 2.613.414.418 2.795.627 4.139.627h2.381l-3.725 12.227h-6.107c-.93 0-2.379-.104-4.346-.104-1.863-.21-3.104-1.255-4.346-1.882-1.139-.522-2.793-1.881-3.207-4.284l-1.863-12.54-8.9 12.331c-2.795 3.866-6.621 6.897-13.143 6.897h-12.417l3.311-10.869h4.762c1.346 0 2.588-.521 3.52-1.045.93-.418 1.758-.836 2.586-2.193zm-187.9-27.2h45.429l-3.312 10.973h-18.11l-2.793 9.299h18.627l-3.415 11.287h-18.524l-4.553 15.152c-.517 1.672 4.45 1.881 6.209 1.881l9.313-1.254-3.726 12.54h-20.904c-1.654 0-2.896-.209-4.76-.627-1.76-.418-2.587-1.254-3.311-2.403-.726-1.254-1.968-2.195-1.14-4.912l6.002-20.063h-10.347l3.415-11.495h10.348l2.794-9.3h-10.347l3.312-10.974zm31.387-19.835h18.626l-3.414 11.39h-25.458l-2.794 2.404c-1.242 1.15-1.552.732-3.105 1.568-1.447.73-4.449 2.193-8.382 2.193h-8.175l3.311-10.972h2.484c2.07 0 3.52-.21 4.243-.627.828-.522 1.76-1.672 2.69-3.554l4.656-8.568h18.526l-3.208 6.27zm35.106 18.81s5.07-4.701 13.764-6.164c1.967-.418 14.385-.211 14.385-.211l1.863-6.27h-26.182l-3.83 12.75zm24.629 4.807h-25.975l-1.551 5.329h22.559c2.691-.313 3.209.104 3.416-.104l1.654-5.225zm-33.734-29.678h15.832l-2.275 8.047s4.967-4.075 8.484-5.539c3.52-1.254 11.383-2.508 11.383-2.508l25.664-.104-8.795 29.469c-1.449 5.016-3.209 8.256-4.244 9.823-.93 1.463-2.07 2.821-4.346 4.075-2.172 1.15-4.141 1.881-6.002 1.986-1.656.104-4.346.209-7.865.209h-24.732l-6.934 23.303c-.619 2.299-.93 3.447-.516 4.074.309.523 1.24 1.15 2.379 1.15l10.865-1.045-3.725 12.749h-12.211c-3.932 0-6.727-.104-8.693-.21-1.862-.208-3.83 0-5.174-1.044-1.138-1.045-2.896-2.403-2.794-3.763.104-1.254.621-3.344 1.45-6.27z" />
                    <path d="m452.43 317.79-1.449 7.105c-.619 2.194-1.137 3.867-2.793 5.33-1.76 1.463-3.725 3.03-8.484 3.03l-8.797.418-.104 7.942c-.104 2.193.518 1.984.828 2.402.414.418.723.523 1.137.732l2.795-.21 8.383-.417-3.52 11.704h-9.623c-6.727 0-11.797-.21-13.35-1.463-1.656-1.046-1.863-2.3-1.863-4.599l.621-31.141h15.42l-.207 6.374h3.725c1.242 0 2.174-.104 2.691-.418.516-.313.828-.836 1.035-1.567l1.551-5.016h12.109zm-219.37-156c-.517 2.508-10.451 48.592-10.451 48.592-2.174 9.3-3.726 15.989-8.9 20.273-3.001 2.508-6.52 3.657-10.555 3.657-6.52 0-10.245-3.239-10.866-9.404l-.104-2.09s1.966-12.436 1.966-12.54c0 0 10.349-42.009 12.212-47.548.103-.313.103-.522.103-.627-20.18.21-23.801 0-24.008-.313-.104.418-.621 3.03-.621 3.03l-10.556 47.34-.932 3.97-1.758 13.168c0 3.866.724 7.105 2.277 9.718 4.863 8.569 18.627 9.823 26.388 9.823 10.038 0 19.455-2.195 25.767-6.061 11.073-6.584 13.97-16.929 16.454-26.02l1.242-4.703s10.659-43.576 12.522-49.219c.103-.314.103-.523.207-.627-14.695.104-18.938 0-20.387-.314zm59.029 86.623c-7.141-.105-9.728-.105-18.11.313l-.311-.627c.724-3.24 1.552-6.374 2.173-9.614l1.035-4.389c1.552-6.792 3.001-14.839 3.208-17.242.207-1.463.62-5.12-3.519-5.12-1.759 0-3.518.835-5.38 1.671-1.036 3.658-3.002 13.899-4.037 18.497-2.07 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314l-.414-.732c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.45-21.84 5.38-29.887l.725-.418c8.279-1.149 10.245-1.463 19.248-3.239l.724.836-1.345 5.016c1.552-.94 3.001-1.881 4.553-2.613 4.243-2.09 8.9-2.717 11.487-2.717 3.932 0 8.279 1.15 10.038 5.748 1.656 4.075.62 9.091-1.656 19.019l-1.138 5.016c-2.277 11.077-2.69 13.062-3.933 20.586l-.827.627zm29.058.027c-4.346 0-7.14-.104-9.83 0-2.691 0-5.278.21-9.314.314l-.207-.314-.207-.418c1.138-4.18 1.656-5.643 2.277-7.106.517-1.463 1.034-2.926 2.07-7.21 1.241-5.539 2.069-9.405 2.586-12.854.621-3.24.932-6.06 1.346-9.3l.31-.209.31-.313c4.347-.627 7.038-1.045 9.832-1.463s5.691-.94 10.141-1.776l.207.418.103.418-2.482 10.345c-.828 3.449-1.656 6.897-2.38 10.346-1.554 7.315-2.277 10.032-2.587 12.017-.414 1.881-.519 2.822-1.14 6.584l-.414.313-.414.314zm45.941-25.675c-.31 1.881-1.966 8.883-4.139 11.809-1.553 2.194-3.312 3.553-5.382 3.553-.62 0-4.14 0-4.242-5.33 0-2.612.517-5.33 1.138-8.255 1.863-8.465 4.14-15.466 9.831-15.466 4.451 0 4.76 5.225 2.794 13.689zm18.731.836c2.483-11.077.518-16.302-1.862-19.437-3.726-4.807-10.348-6.374-17.178-6.374-4.141 0-13.867.418-21.525 7.524-5.484 5.12-8.071 12.122-9.52 18.81-1.554 6.792-3.312 19.019 7.864 23.617 3.414 1.463 8.382 1.88 11.59 1.88 8.176 0 16.558-2.298 22.87-8.986 4.863-5.434 7.036-13.585 7.864-17.034zm174.43 26.08c-8.693-.104-11.176-.104-19.145.314l-.518-.627c2.174-8.256 4.346-16.616 6.312-24.976 2.484-10.868 3.105-15.466 3.934-21.84l.619-.522c8.59-1.254 10.971-1.567 19.973-3.239l.207.731c-1.656 6.897-3.207 13.69-4.863 20.482-3.311 14.317-4.451 21.632-5.691 29.156l-.828.627z" />
                    <path d="m547.75 224.16c-.414 1.776-2.07 8.882-4.242 11.808-1.449 2.09-4.967 3.449-6.934 3.449-.621 0-4.035 0-4.242-5.225 0-2.613.516-5.33 1.137-8.256 1.863-8.255 4.141-15.257 9.832-15.257 4.449 0 6.416 5.12 4.449 13.585zm17.076.836c2.482-11.077-7.658-.94-9.211-4.598-2.484-5.748-.932-17.243-10.865-21.109-3.83-1.568-12.832.418-20.49 7.524-5.381 5.016-8.072 12.017-9.52 18.705-1.555 6.688-3.312 19.02 7.76 23.304 3.52 1.567 6.727 1.985 9.934 1.776 11.178-.627 19.662-17.661 25.977-24.349 4.86-5.329 5.689 1.986 6.415-1.253zm-129.94 23.413c-7.141-.105-9.625-.105-18.006.313l-.311-.627c.725-3.24 1.553-6.374 2.275-9.614l.932-4.389c1.553-6.792 3.105-14.839 3.207-17.242.207-1.463.621-5.12-3.414-5.12-1.76 0-3.621.835-5.381 1.671-.932 3.658-3.002 13.899-4.037 18.497-1.965 9.823-2.172 10.972-3.104 15.78l-.621.626c-7.346-.104-9.934-.104-18.419.314l-.414-.732c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.346-21.84 5.379-29.887l.621-.418c8.281-1.149 10.35-1.463 19.248-3.239l.727.836-1.242 5.016c1.449-.94 3-1.881 4.449-2.613 4.244-2.09 8.9-2.717 11.486-2.717 3.934 0 8.176 1.15 10.037 5.748 1.656 4.075.52 9.091-1.758 19.019l-1.139 5.016c-2.379 11.077-2.689 13.062-3.934 20.586l-.826.627zm62-86.519-6.002.105c-15.523.209-21.732.104-24.215-.209-.207 1.15-.621 3.135-.621 3.135s-5.588 25.916-5.588 26.02c0 0-13.246 55.176-13.867 57.788 13.557-.209 19.041-.209 21.422.105.518-2.613 3.621-17.974 3.725-17.974 0 0 2.691-11.286 2.795-11.704 0 0 .826-1.15 1.654-1.672h1.242c11.695 0 24.836 0 35.186-7.628 7.037-5.225 11.797-13.063 13.971-22.468.516-2.299.93-5.016.93-7.837 0-3.658-.723-7.21-2.793-10.032-5.279-7.42-15.732-7.524-27.839-7.629zm7.762 27.066c-1.242 5.747-4.967 10.659-9.727 12.958-3.934 1.985-8.693 2.194-13.66 2.194h-3.209l.207-1.254s5.9-25.916 5.9-25.811l.205-1.359.104-1.045 2.381.21s12.211 1.044 12.418 1.044c4.759 1.881 6.83 6.688 5.381 13.063zm127.21 8.666-.725-.836c-8.795 1.776-10.451 2.09-18.523 3.24l-.621.626c0 .105-.104.21-.104.418v-.104c-6.002 14.107-5.898 11.077-10.762 22.154 0-.523 0-.836-.104-1.359l-1.242-24.035-.725-.836c-9.314 1.777-9.52 2.09-18.006 3.24l-.621.627c-.104.313-.104.627-.104.94l.104.105c1.035 5.538.828 4.284 1.863 12.958.518 4.284 1.139 8.569 1.654 12.749.828 7.106 1.348 10.554 2.381 21.318-5.795 9.613-7.141 13.271-12.729 21.734l.311.836c8.383-.312 10.244-.312 16.453-.312l1.348-1.568c4.654-10.135 40.254-71.79 40.254-71.79zm-302.72 6.922c4.76-3.344 5.38-7.942 1.345-10.345-4.036-2.404-11.176-1.672-15.937 1.672-4.76 3.24-5.277 7.837-1.241 10.345 3.932 2.3 11.073 1.672 15.833-1.672z" />
                    <path d="m590.33 270.9-6.936 12.019c-2.172 4.075-6.311 7.21-12.727 7.21l-11.074-.209 3.209-10.868h2.172c1.139 0 1.967-.104 2.588-.418.621-.209.932-.627 1.449-1.254l4.139-6.583h17.281z" />
                  </g>
                </svg>
              </li>
              <li>
                <svg
                  enable-background="new 0 0 780 500"
                  height="500"
                  viewBox="0 0 780 500"
                  width="780"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001"
                    fill="#0e4595"
                  />
                  <path
                    d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
                    fill="#f2ae14"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;