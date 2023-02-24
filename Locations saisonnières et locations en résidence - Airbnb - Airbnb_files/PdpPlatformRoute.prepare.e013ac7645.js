__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={document:void 0,getDocument:()=>r(d[1])(d[0],"./PdpEarlyFlushMetadataQueryV2-document.niobe").then(babelHelpers.interopRequireWildcard).then(t=>t.default),name:'PdpEarlyFlushMetadataQueryV2',type:'query',operationId:'500d7049641722ac4b7942133db1868ba1e3df01fa8dc24fc019d1e62b5e3d69'};e.default=t}),"125933",["5c863a","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),l=r(d[1]),o=r(d[2]),n=babelHelpers.interopRequireDefault(r(d[3]));var s=({isPrefetch:s,location:u,match:p,niobeMinimalistClient:c,previousLocation:b,previousPrepareProps:f,customPrepareNiobeData:h})=>{const{id:v}=p.params,y=u.pathname.split(v)[0]===(null==b?void 0:b.pathname.split(v)[0]);if(f&&y)return f;const P=s?{headers:{'X-Airbnb-Prefetch':'web'}}:void 0,q=Boolean(h.launchPdpUncaching);return{queryRef:c.preloadQuery({context:P,query:t.default,variables:(0,l.getRequestVariables)({location:u,match:p}),deferrable:q}),skeletonQueryRef:c.preloadQuery({query:n.default,variables:{id:(0,o.createGlobalId)('StayListing',p.params.id)},skip:!q}),showDeferredSkeleton:q}};e.default=s}),"13d687",["263d9b","b33b52","685055","125933"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={document:void 0,getDocument:()=>r(d[1])(d[0],"./StaysPdpSections-document.niobe").then(babelHelpers.interopRequireWildcard).then(t=>t.default),name:'StaysPdpSections',type:'query',operationId:'a237ab8b9fa596d486fedef01ce88c72df39100c34a2c5339090f3126a0d2c23'};e.default=t}),"263d9b",["d1d879","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l){const{display_extensions:n}=(0,t.default)(l.search);if(null==n||!Array.isArray(n))return null;return n.map(t=>'MONTHLY_STAYS'===t.toUpperCase()?'MONTHLY_STAYS':'LR_REDIRECT'===t.toUpperCase()?'LR_REDIRECT':'DATED_LTS'===t.toUpperCase()?'DATED_LTS':null)};var t=babelHelpers.interopRequireDefault(r(d[0]))}),"2954b7",["99e500"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({params:l,pathname:o=window.location.pathname,search:u=window.location.search}){if(!l||0===Object.keys(l).length)return o+u;const s={...(0,n.default)(u),...l},c=t.default.stringify(s,{arrayFormat:'brackets'});return c.length>0?`${o}?${c}`:o};var t=babelHelpers.interopRequireDefault(r(d[0])),n=babelHelpers.interopRequireDefault(r(d[1]))}),"3732e6",["d2b390","99e500"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u){return(function(u){const{pdp_type_override:c,tier_override:n}=(0,t.default)(u);if(n&&'0'===n)return'MARKETPLACE';if(n&&'1'===n)return'PLUS';switch(c){case'HOTEL':case'hotel':return'HOTEL';case'LUXE':case'luxe':return'LUXE';case'MARKETPLACE':case'marketplace':return'MARKETPLACE';case'PLUS':case'plus':return'PLUS';default:return}})(u.search)};var t=babelHelpers.interopRequireDefault(r(d[0]))}),"664416",["99e500"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createGlobalId=function(n,t){return(function(n){return window.btoa(n)})((function(n,t){return`${n}:${encodeURIComponent(t).replace(/%20/g,'+').replace(/\(/g,'%28').replace(/\)/g,'%29')}`})(n,t))},e.getInternalId=function(n){const{internalId:t}=(function(n){const t=n.split(':'),[o,c]=t,l=c&&decodeURIComponent(c.replace(/\+/g,'%20').replace(/%28/g,'(').replace(/%29/g,')'));if(void 0===o||void 0===l)throw new Error('Failed to decode global ID');return{typename:o,internalId:l}})((o=n,window.atob(o)));var o;return t},e.parseGlobalId=function(n){return n},e.stringifyGlobalId=function(n){return n}}),"685055",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,u){return Object.entries(t).reduce((t,[n,c])=>(u(c,n)&&(t[n]=c),t),{})}}),"72751c",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({id:t,queryParams:o}){const{confirmation_code:s,split_stays_uuid:n}=o;return{splitStaysId:n,stays:[{productId:t,confirmationCode:s}]}}}),"896ce9",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTranslateUgcParam=function(t){return(function(t){const{translate_ugc:n}=(0,l.default)(t);return n?'true'===n:null})(t.search)},e.setTranslateUgcParam=function(s){if(!g.window)return;if('function'!=typeof g.window.history.replaceState)return;if('UNDEFINED'===s)return;const c=(0,l.default)(),f='UNTRANSLATED'===s,p=(0,n.default)({...c,translate_ugc:String(f)},t.default),{hash:b,pathname:h,search:D}=window.location,w=(0,o.default)({params:p,pathname:h,search:D})+b;(0,u.getHistory)().replace(w)};var t=babelHelpers.interopRequireDefault(r(d[0])),n=babelHelpers.interopRequireDefault(r(d[1])),u=r(d[2]),l=babelHelpers.interopRequireDefault(r(d[3])),o=babelHelpers.interopRequireDefault(r(d[4]))}),"974ac4",["c2e91d","72751c","da368f","99e500","3732e6"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRequestVariables=function({forSplitStays:c=!1,location:p,match:_}){const y=(0,l.createGlobalId)('StayListing',_.params.id),I=(0,t.default)(p.search),{adults:b,bypass_targetings:h,cancellation_policy_id:f,category_tag:k,cause_id:S,check_in:v,check_out:N,children:R,disaster_id:q,discountedGuestFeeVersion:D=null,federatedSearchId:P=null,federated_search_id:T=null,force_boost_unc_priority_message_type:O,guests:B,infants:E,interactionType:M=null,mockId:U,omni_page_id:w,omni_version_id:A,original_check_in:C,original_check_out:G,pets:H,preview:V,priceDropSource:x,private_booking:L,promotionUuid:F,rate_plan_id:W,relaxed_amenity_ids:j,searchId:z=null,staysBookingMigrationEnabled:J=null,useNewSectionWrapperApi:K=null,photoId:Q=null}=I,X={adults:b||B||'1',bypassTargetings:'true'===h,categoryTag:k||null,causeId:S||null,children:R||null,disasterId:q||null,discountedGuestFeeVersion:Number(D)||null,displayExtensions:(0,o.default)(p),federatedSearchId:P||T,forceBoostPriorityMessageType:O||null,infants:E||null,interactionType:M,layouts:['SIDEBAR','SINGLE_COLUMN'],omniPageId:w,omniVersionId:A,pets:Number(H)||0,pdpTypeOverride:(0,u.default)(p)||null,preview:'true'===V,previousStateCheckIn:C||null,previousStateCheckOut:G||null,priceDropSource:x||null,privateBooking:'true'===L,promotionUuid:F||null,relaxedAmenityIds:j||null,searchId:z,selectedCancellationPolicyId:Number(f)||null,selectedRatePlanId:Number(W)||null,splitStays:c?(0,s.default)({id:y,queryParams:I}):null,staysBookingMigrationEnabled:'true'===J,translateUgc:(0,n.getTranslateUgcParam)(p),useNewSectionWrapperApi:'true'===K,sectionIds:null,checkIn:null,checkOut:null,p3ImpressionId:void 0,photoId:Q};v&&N&&(X.checkIn=v,X.checkOut=N);return{id:y,pdpSectionsRequest:X,...U&&{mockIdentifier:U}}};var t=babelHelpers.interopRequireDefault(r(d[0])),l=r(d[1]),n=r(d[2]),u=babelHelpers.interopRequireDefault(r(d[3])),o=babelHelpers.interopRequireDefault(r(d[4])),s=babelHelpers.interopRequireDefault(r(d[5]))}),"b33b52",["99e500","685055","974ac4","664416","2954b7","896ce9"]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/frontend/gp-stays-pdp-route/routes/PdpPlatformRoute.prepare.23b65363f3.js.map