// * TURBO-POWERED COLOR SCHEMES
// original by [Rex Riepe in LESS](https://github.com/rexriepe/tpcs)
// translated to JS by [Knogobert](https://github.com/knogobert)

// TODO: Alpha channel/transparency support

// * The Turbo colormap
// by Anton Mikhailov
// see https://gist.github.com/mikhailov-work/ for more info
const turbo = [
  [Math.floor(0.18995 * 255), Math.floor(0.07176 * 255), Math.floor(0.23217 * 255)],
  [Math.floor(0.19483 * 255), Math.floor(0.08339 * 255), Math.floor(0.26149 * 255)],
  [Math.floor(0.19956 * 255), Math.floor(0.09498 * 255), Math.floor(0.29024 * 255)],
  [Math.floor(0.20415 * 255), Math.floor(0.10652 * 255), Math.floor(0.31844 * 255)],
  [Math.floor(0.20860 * 255), Math.floor(0.11802 * 255), Math.floor(0.34607 * 255)],
  [Math.floor(0.21291 * 255), Math.floor(0.12947 * 255), Math.floor(0.37314 * 255)],
  [Math.floor(0.21708 * 255), Math.floor(0.14087 * 255), Math.floor(0.39964 * 255)],
  [Math.floor(0.22111 * 255), Math.floor(0.15223 * 255), Math.floor(0.42558 * 255)],
  [Math.floor(0.22500 * 255), Math.floor(0.16354 * 255), Math.floor(0.45096 * 255)],
  [Math.floor(0.22875 * 255), Math.floor(0.17481 * 255), Math.floor(0.47578 * 255)],
  [Math.floor(0.23236 * 255), Math.floor(0.18603 * 255), Math.floor(0.50004 * 255)],
  [Math.floor(0.23582 * 255), Math.floor(0.19720 * 255), Math.floor(0.52373 * 255)],
  [Math.floor(0.23915 * 255), Math.floor(0.20833 * 255), Math.floor(0.54686 * 255)],
  [Math.floor(0.24234 * 255), Math.floor(0.21941 * 255), Math.floor(0.56942 * 255)],
  [Math.floor(0.24539 * 255), Math.floor(0.23044 * 255), Math.floor(0.59142 * 255)],
  [Math.floor(0.24830 * 255), Math.floor(0.24143 * 255), Math.floor(0.61286 * 255)],
  [Math.floor(0.25107 * 255), Math.floor(0.25237 * 255), Math.floor(0.63374 * 255)],
  [Math.floor(0.25369 * 255), Math.floor(0.26327 * 255), Math.floor(0.65406 * 255)],
  [Math.floor(0.25618 * 255), Math.floor(0.27412 * 255), Math.floor(0.67381 * 255)],
  [Math.floor(0.25853 * 255), Math.floor(0.28492 * 255), Math.floor(0.69300 * 255)],
  [Math.floor(0.26074 * 255), Math.floor(0.29568 * 255), Math.floor(0.71162 * 255)],
  [Math.floor(0.26280 * 255), Math.floor(0.30639 * 255), Math.floor(0.72968 * 255)],
  [Math.floor(0.26473 * 255), Math.floor(0.31706 * 255), Math.floor(0.74718 * 255)],
  [Math.floor(0.26652 * 255), Math.floor(0.32768 * 255), Math.floor(0.76412 * 255)],
  [Math.floor(0.26816 * 255), Math.floor(0.33825 * 255), Math.floor(0.78050 * 255)],
  [Math.floor(0.26967 * 255), Math.floor(0.34878 * 255), Math.floor(0.79631 * 255)],
  [Math.floor(0.27103 * 255), Math.floor(0.35926 * 255), Math.floor(0.81156 * 255)],
  [Math.floor(0.27226 * 255), Math.floor(0.36970 * 255), Math.floor(0.82624 * 255)],
  [Math.floor(0.27334 * 255), Math.floor(0.38008 * 255), Math.floor(0.84037 * 255)],
  [Math.floor(0.27429 * 255), Math.floor(0.39043 * 255), Math.floor(0.85393 * 255)],
  [Math.floor(0.27509 * 255), Math.floor(0.40072 * 255), Math.floor(0.86692 * 255)],
  [Math.floor(0.27576 * 255), Math.floor(0.41097 * 255), Math.floor(0.87936 * 255)],
  [Math.floor(0.27628 * 255), Math.floor(0.42118 * 255), Math.floor(0.89123 * 255)],
  [Math.floor(0.27667 * 255), Math.floor(0.43134 * 255), Math.floor(0.90254 * 255)],
  [Math.floor(0.27691 * 255), Math.floor(0.44145 * 255), Math.floor(0.91328 * 255)],
  [Math.floor(0.27701 * 255), Math.floor(0.45152 * 255), Math.floor(0.92347 * 255)],
  [Math.floor(0.27698 * 255), Math.floor(0.46153 * 255), Math.floor(0.93309 * 255)],
  [Math.floor(0.27680 * 255), Math.floor(0.47151 * 255), Math.floor(0.94214 * 255)],
  [Math.floor(0.27648 * 255), Math.floor(0.48144 * 255), Math.floor(0.95064 * 255)],
  [Math.floor(0.27603 * 255), Math.floor(0.49132 * 255), Math.floor(0.95857 * 255)],
  [Math.floor(0.27543 * 255), Math.floor(0.50115 * 255), Math.floor(0.96594 * 255)],
  [Math.floor(0.27469 * 255), Math.floor(0.51094 * 255), Math.floor(0.97275 * 255)],
  [Math.floor(0.27381 * 255), Math.floor(0.52069 * 255), Math.floor(0.97899 * 255)],
  [Math.floor(0.27273 * 255), Math.floor(0.53040 * 255), Math.floor(0.98461 * 255)],
  [Math.floor(0.27106 * 255), Math.floor(0.54015 * 255), Math.floor(0.98930 * 255)],
  [Math.floor(0.26878 * 255), Math.floor(0.54995 * 255), Math.floor(0.99303 * 255)],
  [Math.floor(0.26592 * 255), Math.floor(0.55979 * 255), Math.floor(0.99583 * 255)],
  [Math.floor(0.26252 * 255), Math.floor(0.56967 * 255), Math.floor(0.99773 * 255)],
  [Math.floor(0.25862 * 255), Math.floor(0.57958 * 255), Math.floor(0.99876 * 255)],
  [Math.floor(0.25425 * 255), Math.floor(0.58950 * 255), Math.floor(0.99896 * 255)],
  [Math.floor(0.24946 * 255), Math.floor(0.59943 * 255), Math.floor(0.99835 * 255)],
  [Math.floor(0.24427 * 255), Math.floor(0.60937 * 255), Math.floor(0.99697 * 255)],
  [Math.floor(0.23874 * 255), Math.floor(0.61931 * 255), Math.floor(0.99485 * 255)],
  [Math.floor(0.23288 * 255), Math.floor(0.62923 * 255), Math.floor(0.99202 * 255)],
  [Math.floor(0.22676 * 255), Math.floor(0.63913 * 255), Math.floor(0.98851 * 255)],
  [Math.floor(0.22039 * 255), Math.floor(0.64901 * 255), Math.floor(0.98436 * 255)],
  [Math.floor(0.21382 * 255), Math.floor(0.65886 * 255), Math.floor(0.97959 * 255)],
  [Math.floor(0.20708 * 255), Math.floor(0.66866 * 255), Math.floor(0.97423 * 255)],
  [Math.floor(0.20021 * 255), Math.floor(0.67842 * 255), Math.floor(0.96833 * 255)],
  [Math.floor(0.19326 * 255), Math.floor(0.68812 * 255), Math.floor(0.96190 * 255)],
  [Math.floor(0.18625 * 255), Math.floor(0.69775 * 255), Math.floor(0.95498 * 255)],
  [Math.floor(0.17923 * 255), Math.floor(0.70732 * 255), Math.floor(0.94761 * 255)],
  [Math.floor(0.17223 * 255), Math.floor(0.71680 * 255), Math.floor(0.93981 * 255)],
  [Math.floor(0.16529 * 255), Math.floor(0.72620 * 255), Math.floor(0.93161 * 255)],
  [Math.floor(0.15844 * 255), Math.floor(0.73551 * 255), Math.floor(0.92305 * 255)],
  [Math.floor(0.15173 * 255), Math.floor(0.74472 * 255), Math.floor(0.91416 * 255)],
  [Math.floor(0.14519 * 255), Math.floor(0.75381 * 255), Math.floor(0.90496 * 255)],
  [Math.floor(0.13886 * 255), Math.floor(0.76279 * 255), Math.floor(0.89550 * 255)],
  [Math.floor(0.13278 * 255), Math.floor(0.77165 * 255), Math.floor(0.88580 * 255)],
  [Math.floor(0.12698 * 255), Math.floor(0.78037 * 255), Math.floor(0.87590 * 255)],
  [Math.floor(0.12151 * 255), Math.floor(0.78896 * 255), Math.floor(0.86581 * 255)],
  [Math.floor(0.11639 * 255), Math.floor(0.79740 * 255), Math.floor(0.85559 * 255)],
  [Math.floor(0.11167 * 255), Math.floor(0.80569 * 255), Math.floor(0.84525 * 255)],
  [Math.floor(0.10738 * 255), Math.floor(0.81381 * 255), Math.floor(0.83484 * 255)],
  [Math.floor(0.10357 * 255), Math.floor(0.82177 * 255), Math.floor(0.82437 * 255)],
  [Math.floor(0.10026 * 255), Math.floor(0.82955 * 255), Math.floor(0.81389 * 255)],
  [Math.floor(0.09750 * 255), Math.floor(0.83714 * 255), Math.floor(0.80342 * 255)],
  [Math.floor(0.09532 * 255), Math.floor(0.84455 * 255), Math.floor(0.79299 * 255)],
  [Math.floor(0.09377 * 255), Math.floor(0.85175 * 255), Math.floor(0.78264 * 255)],
  [Math.floor(0.09287 * 255), Math.floor(0.85875 * 255), Math.floor(0.77240 * 255)],
  [Math.floor(0.09267 * 255), Math.floor(0.86554 * 255), Math.floor(0.76230 * 255)],
  [Math.floor(0.09320 * 255), Math.floor(0.87211 * 255), Math.floor(0.75237 * 255)],
  [Math.floor(0.09451 * 255), Math.floor(0.87844 * 255), Math.floor(0.74265 * 255)],
  [Math.floor(0.09662 * 255), Math.floor(0.88454 * 255), Math.floor(0.73316 * 255)],
  [Math.floor(0.09958 * 255), Math.floor(0.89040 * 255), Math.floor(0.72393 * 255)],
  [Math.floor(0.10342 * 255), Math.floor(0.89600 * 255), Math.floor(0.71500 * 255)],
  [Math.floor(0.10815 * 255), Math.floor(0.90142 * 255), Math.floor(0.70599 * 255)],
  [Math.floor(0.11374 * 255), Math.floor(0.90673 * 255), Math.floor(0.69651 * 255)],
  [Math.floor(0.12014 * 255), Math.floor(0.91193 * 255), Math.floor(0.68660 * 255)],
  [Math.floor(0.12733 * 255), Math.floor(0.91701 * 255), Math.floor(0.67627 * 255)],
  [Math.floor(0.13526 * 255), Math.floor(0.92197 * 255), Math.floor(0.66556 * 255)],
  [Math.floor(0.14391 * 255), Math.floor(0.92680 * 255), Math.floor(0.65448 * 255)],
  [Math.floor(0.15323 * 255), Math.floor(0.93151 * 255), Math.floor(0.64308 * 255)],
  [Math.floor(0.16319 * 255), Math.floor(0.93609 * 255), Math.floor(0.63137 * 255)],
  [Math.floor(0.17377 * 255), Math.floor(0.94053 * 255), Math.floor(0.61938 * 255)],
  [Math.floor(0.18491 * 255), Math.floor(0.94484 * 255), Math.floor(0.60713 * 255)],
  [Math.floor(0.19659 * 255), Math.floor(0.94901 * 255), Math.floor(0.59466 * 255)],
  [Math.floor(0.20877 * 255), Math.floor(0.95304 * 255), Math.floor(0.58199 * 255)],
  [Math.floor(0.22142 * 255), Math.floor(0.95692 * 255), Math.floor(0.56914 * 255)],
  [Math.floor(0.23449 * 255), Math.floor(0.96065 * 255), Math.floor(0.55614 * 255)],
  [Math.floor(0.24797 * 255), Math.floor(0.96423 * 255), Math.floor(0.54303 * 255)],
  [Math.floor(0.26180 * 255), Math.floor(0.96765 * 255), Math.floor(0.52981 * 255)],
  [Math.floor(0.27597 * 255), Math.floor(0.97092 * 255), Math.floor(0.51653 * 255)],
  [Math.floor(0.29042 * 255), Math.floor(0.97403 * 255), Math.floor(0.50321 * 255)],
  [Math.floor(0.30513 * 255), Math.floor(0.97697 * 255), Math.floor(0.48987 * 255)],
  [Math.floor(0.32006 * 255), Math.floor(0.97974 * 255), Math.floor(0.47654 * 255)],
  [Math.floor(0.33517 * 255), Math.floor(0.98234 * 255), Math.floor(0.46325 * 255)],
  [Math.floor(0.35043 * 255), Math.floor(0.98477 * 255), Math.floor(0.45002 * 255)],
  [Math.floor(0.36581 * 255), Math.floor(0.98702 * 255), Math.floor(0.43688 * 255)],
  [Math.floor(0.38127 * 255), Math.floor(0.98909 * 255), Math.floor(0.42386 * 255)],
  [Math.floor(0.39678 * 255), Math.floor(0.99098 * 255), Math.floor(0.41098 * 255)],
  [Math.floor(0.41229 * 255), Math.floor(0.99268 * 255), Math.floor(0.39826 * 255)],
  [Math.floor(0.42778 * 255), Math.floor(0.99419 * 255), Math.floor(0.38575 * 255)],
  [Math.floor(0.44321 * 255), Math.floor(0.99551 * 255), Math.floor(0.37345 * 255)],
  [Math.floor(0.45854 * 255), Math.floor(0.99663 * 255), Math.floor(0.36140 * 255)],
  [Math.floor(0.47375 * 255), Math.floor(0.99755 * 255), Math.floor(0.34963 * 255)],
  [Math.floor(0.48879 * 255), Math.floor(0.99828 * 255), Math.floor(0.33816 * 255)],
  [Math.floor(0.50362 * 255), Math.floor(0.99879 * 255), Math.floor(0.32701 * 255)],
  [Math.floor(0.51822 * 255), Math.floor(0.99910 * 255), Math.floor(0.31622 * 255)],
  [Math.floor(0.53255 * 255), Math.floor(0.99919 * 255), Math.floor(0.30581 * 255)],
  [Math.floor(0.54658 * 255), Math.floor(0.99907 * 255), Math.floor(0.29581 * 255)],
  [Math.floor(0.56026 * 255), Math.floor(0.99873 * 255), Math.floor(0.28623 * 255)],
  [Math.floor(0.57357 * 255), Math.floor(0.99817 * 255), Math.floor(0.27712 * 255)],
  [Math.floor(0.58646 * 255), Math.floor(0.99739 * 255), Math.floor(0.26849 * 255)],
  [Math.floor(0.59891 * 255), Math.floor(0.99638 * 255), Math.floor(0.26038 * 255)],
  [Math.floor(0.61088 * 255), Math.floor(0.99514 * 255), Math.floor(0.25280 * 255)],
  [Math.floor(0.62233 * 255), Math.floor(0.99366 * 255), Math.floor(0.24579 * 255)],
  [Math.floor(0.63323 * 255), Math.floor(0.99195 * 255), Math.floor(0.23937 * 255)],
  [Math.floor(0.64362 * 255), Math.floor(0.98999 * 255), Math.floor(0.23356 * 255)],
  [Math.floor(0.65394 * 255), Math.floor(0.98775 * 255), Math.floor(0.22835 * 255)],
  [Math.floor(0.66428 * 255), Math.floor(0.98524 * 255), Math.floor(0.22370 * 255)],
  [Math.floor(0.67462 * 255), Math.floor(0.98246 * 255), Math.floor(0.21960 * 255)],
  [Math.floor(0.68494 * 255), Math.floor(0.97941 * 255), Math.floor(0.21602 * 255)],
  [Math.floor(0.69525 * 255), Math.floor(0.97610 * 255), Math.floor(0.21294 * 255)],
  [Math.floor(0.70553 * 255), Math.floor(0.97255 * 255), Math.floor(0.21032 * 255)],
  [Math.floor(0.71577 * 255), Math.floor(0.96875 * 255), Math.floor(0.20815 * 255)],
  [Math.floor(0.72596 * 255), Math.floor(0.96470 * 255), Math.floor(0.20640 * 255)],
  [Math.floor(0.73610 * 255), Math.floor(0.96043 * 255), Math.floor(0.20504 * 255)],
  [Math.floor(0.74617 * 255), Math.floor(0.95593 * 255), Math.floor(0.20406 * 255)],
  [Math.floor(0.75617 * 255), Math.floor(0.95121 * 255), Math.floor(0.20343 * 255)],
  [Math.floor(0.76608 * 255), Math.floor(0.94627 * 255), Math.floor(0.20311 * 255)],
  [Math.floor(0.77591 * 255), Math.floor(0.94113 * 255), Math.floor(0.20310 * 255)],
  [Math.floor(0.78563 * 255), Math.floor(0.93579 * 255), Math.floor(0.20336 * 255)],
  [Math.floor(0.79524 * 255), Math.floor(0.93025 * 255), Math.floor(0.20386 * 255)],
  [Math.floor(0.80473 * 255), Math.floor(0.92452 * 255), Math.floor(0.20459 * 255)],
  [Math.floor(0.81410 * 255), Math.floor(0.91861 * 255), Math.floor(0.20552 * 255)],
  [Math.floor(0.82333 * 255), Math.floor(0.91253 * 255), Math.floor(0.20663 * 255)],
  [Math.floor(0.83241 * 255), Math.floor(0.90627 * 255), Math.floor(0.20788 * 255)],
  [Math.floor(0.84133 * 255), Math.floor(0.89986 * 255), Math.floor(0.20926 * 255)],
  [Math.floor(0.85010 * 255), Math.floor(0.89328 * 255), Math.floor(0.21074 * 255)],
  [Math.floor(0.85868 * 255), Math.floor(0.88655 * 255), Math.floor(0.21230 * 255)],
  [Math.floor(0.86709 * 255), Math.floor(0.87968 * 255), Math.floor(0.21391 * 255)],
  [Math.floor(0.87530 * 255), Math.floor(0.87267 * 255), Math.floor(0.21555 * 255)],
  [Math.floor(0.88331 * 255), Math.floor(0.86553 * 255), Math.floor(0.21719 * 255)],
  [Math.floor(0.89112 * 255), Math.floor(0.85826 * 255), Math.floor(0.21880 * 255)],
  [Math.floor(0.89870 * 255), Math.floor(0.85087 * 255), Math.floor(0.22038 * 255)],
  [Math.floor(0.90605 * 255), Math.floor(0.84337 * 255), Math.floor(0.22188 * 255)],
  [Math.floor(0.91317 * 255), Math.floor(0.83576 * 255), Math.floor(0.22328 * 255)],
  [Math.floor(0.92004 * 255), Math.floor(0.82806 * 255), Math.floor(0.22456 * 255)],
  [Math.floor(0.92666 * 255), Math.floor(0.82025 * 255), Math.floor(0.22570 * 255)],
  [Math.floor(0.93301 * 255), Math.floor(0.81236 * 255), Math.floor(0.22667 * 255)],
  [Math.floor(0.93909 * 255), Math.floor(0.80439 * 255), Math.floor(0.22744 * 255)],
  [Math.floor(0.94489 * 255), Math.floor(0.79634 * 255), Math.floor(0.22800 * 255)],
  [Math.floor(0.95039 * 255), Math.floor(0.78823 * 255), Math.floor(0.22831 * 255)],
  [Math.floor(0.95560 * 255), Math.floor(0.78005 * 255), Math.floor(0.22836 * 255)],
  [Math.floor(0.96049 * 255), Math.floor(0.77181 * 255), Math.floor(0.22811 * 255)],
  [Math.floor(0.96507 * 255), Math.floor(0.76352 * 255), Math.floor(0.22754 * 255)],
  [Math.floor(0.96931 * 255), Math.floor(0.75519 * 255), Math.floor(0.22663 * 255)],
  [Math.floor(0.97323 * 255), Math.floor(0.74682 * 255), Math.floor(0.22536 * 255)],
  [Math.floor(0.97679 * 255), Math.floor(0.73842 * 255), Math.floor(0.22369 * 255)],
  [Math.floor(0.98000 * 255), Math.floor(0.73000 * 255), Math.floor(0.22161 * 255)],
  [Math.floor(0.98289 * 255), Math.floor(0.72140 * 255), Math.floor(0.21918 * 255)],
  [Math.floor(0.98549 * 255), Math.floor(0.71250 * 255), Math.floor(0.21650 * 255)],
  [Math.floor(0.98781 * 255), Math.floor(0.70330 * 255), Math.floor(0.21358 * 255)],
  [Math.floor(0.98986 * 255), Math.floor(0.69382 * 255), Math.floor(0.21043 * 255)],
  [Math.floor(0.99163 * 255), Math.floor(0.68408 * 255), Math.floor(0.20706 * 255)],
  [Math.floor(0.99314 * 255), Math.floor(0.67408 * 255), Math.floor(0.20348 * 255)],
  [Math.floor(0.99438 * 255), Math.floor(0.66386 * 255), Math.floor(0.19971 * 255)],
  [Math.floor(0.99535 * 255), Math.floor(0.65341 * 255), Math.floor(0.19577 * 255)],
  [Math.floor(0.99607 * 255), Math.floor(0.64277 * 255), Math.floor(0.19165 * 255)],
  [Math.floor(0.99654 * 255), Math.floor(0.63193 * 255), Math.floor(0.18738 * 255)],
  [Math.floor(0.99675 * 255), Math.floor(0.62093 * 255), Math.floor(0.18297 * 255)],
  [Math.floor(0.99672 * 255), Math.floor(0.60977 * 255), Math.floor(0.17842 * 255)],
  [Math.floor(0.99644 * 255), Math.floor(0.59846 * 255), Math.floor(0.17376 * 255)],
  [Math.floor(0.99593 * 255), Math.floor(0.58703 * 255), Math.floor(0.16899 * 255)],
  [Math.floor(0.99517 * 255), Math.floor(0.57549 * 255), Math.floor(0.16412 * 255)],
  [Math.floor(0.99419 * 255), Math.floor(0.56386 * 255), Math.floor(0.15918 * 255)],
  [Math.floor(0.99297 * 255), Math.floor(0.55214 * 255), Math.floor(0.15417 * 255)],
  [Math.floor(0.99153 * 255), Math.floor(0.54036 * 255), Math.floor(0.14910 * 255)],
  [Math.floor(0.98987 * 255), Math.floor(0.52854 * 255), Math.floor(0.14398 * 255)],
  [Math.floor(0.98799 * 255), Math.floor(0.51667 * 255), Math.floor(0.13883 * 255)],
  [Math.floor(0.98590 * 255), Math.floor(0.50479 * 255), Math.floor(0.13367 * 255)],
  [Math.floor(0.98360 * 255), Math.floor(0.49291 * 255), Math.floor(0.12849 * 255)],
  [Math.floor(0.98108 * 255), Math.floor(0.48104 * 255), Math.floor(0.12332 * 255)],
  [Math.floor(0.97837 * 255), Math.floor(0.46920 * 255), Math.floor(0.11817 * 255)],
  [Math.floor(0.97545 * 255), Math.floor(0.45740 * 255), Math.floor(0.11305 * 255)],
  [Math.floor(0.97234 * 255), Math.floor(0.44565 * 255), Math.floor(0.10797 * 255)],
  [Math.floor(0.96904 * 255), Math.floor(0.43399 * 255), Math.floor(0.10294 * 255)],
  [Math.floor(0.96555 * 255), Math.floor(0.42241 * 255), Math.floor(0.09798 * 255)],
  [Math.floor(0.96187 * 255), Math.floor(0.41093 * 255), Math.floor(0.09310 * 255)],
  [Math.floor(0.95801 * 255), Math.floor(0.39958 * 255), Math.floor(0.08831 * 255)],
  [Math.floor(0.95398 * 255), Math.floor(0.38836 * 255), Math.floor(0.08362 * 255)],
  [Math.floor(0.94977 * 255), Math.floor(0.37729 * 255), Math.floor(0.07905 * 255)],
  [Math.floor(0.94538 * 255), Math.floor(0.36638 * 255), Math.floor(0.07461 * 255)],
  [Math.floor(0.94084 * 255), Math.floor(0.35566 * 255), Math.floor(0.07031 * 255)],
  [Math.floor(0.93612 * 255), Math.floor(0.34513 * 255), Math.floor(0.06616 * 255)],
  [Math.floor(0.93125 * 255), Math.floor(0.33482 * 255), Math.floor(0.06218 * 255)],
  [Math.floor(0.92623 * 255), Math.floor(0.32473 * 255), Math.floor(0.05837 * 255)],
  [Math.floor(0.92105 * 255), Math.floor(0.31489 * 255), Math.floor(0.05475 * 255)],
  [Math.floor(0.91572 * 255), Math.floor(0.30530 * 255), Math.floor(0.05134 * 255)],
  [Math.floor(0.91024 * 255), Math.floor(0.29599 * 255), Math.floor(0.04814 * 255)],
  [Math.floor(0.90463 * 255), Math.floor(0.28696 * 255), Math.floor(0.04516 * 255)],
  [Math.floor(0.89888 * 255), Math.floor(0.27824 * 255), Math.floor(0.04243 * 255)],
  [Math.floor(0.89298 * 255), Math.floor(0.26981 * 255), Math.floor(0.03993 * 255)],
  [Math.floor(0.88691 * 255), Math.floor(0.26152 * 255), Math.floor(0.03753 * 255)],
  [Math.floor(0.88066 * 255), Math.floor(0.25334 * 255), Math.floor(0.03521 * 255)],
  [Math.floor(0.87422 * 255), Math.floor(0.24526 * 255), Math.floor(0.03297 * 255)],
  [Math.floor(0.86760 * 255), Math.floor(0.23730 * 255), Math.floor(0.03082 * 255)],
  [Math.floor(0.86079 * 255), Math.floor(0.22945 * 255), Math.floor(0.02875 * 255)],
  [Math.floor(0.85380 * 255), Math.floor(0.22170 * 255), Math.floor(0.02677 * 255)],
  [Math.floor(0.84662 * 255), Math.floor(0.21407 * 255), Math.floor(0.02487 * 255)],
  [Math.floor(0.83926 * 255), Math.floor(0.20654 * 255), Math.floor(0.02305 * 255)],
  [Math.floor(0.83172 * 255), Math.floor(0.19912 * 255), Math.floor(0.02131 * 255)],
  [Math.floor(0.82399 * 255), Math.floor(0.19182 * 255), Math.floor(0.01966 * 255)],
  [Math.floor(0.81608 * 255), Math.floor(0.18462 * 255), Math.floor(0.01809 * 255)],
  [Math.floor(0.80799 * 255), Math.floor(0.17753 * 255), Math.floor(0.01660 * 255)],
  [Math.floor(0.79971 * 255), Math.floor(0.17055 * 255), Math.floor(0.01520 * 255)],
  [Math.floor(0.79125 * 255), Math.floor(0.16368 * 255), Math.floor(0.01387 * 255)],
  [Math.floor(0.78260 * 255), Math.floor(0.15693 * 255), Math.floor(0.01264 * 255)],
  [Math.floor(0.77377 * 255), Math.floor(0.15028 * 255), Math.floor(0.01148 * 255)],
  [Math.floor(0.76476 * 255), Math.floor(0.14374 * 255), Math.floor(0.01041 * 255)],
  [Math.floor(0.75556 * 255), Math.floor(0.13731 * 255), Math.floor(0.00942 * 255)],
  [Math.floor(0.74617 * 255), Math.floor(0.13098 * 255), Math.floor(0.00851 * 255)],
  [Math.floor(0.73661 * 255), Math.floor(0.12477 * 255), Math.floor(0.00769 * 255)],
  [Math.floor(0.72686 * 255), Math.floor(0.11867 * 255), Math.floor(0.00695 * 255)],
  [Math.floor(0.71692 * 255), Math.floor(0.11268 * 255), Math.floor(0.00629 * 255)],
  [Math.floor(0.70680 * 255), Math.floor(0.10680 * 255), Math.floor(0.00571 * 255)],
  [Math.floor(0.69650 * 255), Math.floor(0.10102 * 255), Math.floor(0.00522 * 255)],
  [Math.floor(0.68602 * 255), Math.floor(0.09536 * 255), Math.floor(0.00481 * 255)],
  [Math.floor(0.67535 * 255), Math.floor(0.08980 * 255), Math.floor(0.00449 * 255)],
  [Math.floor(0.66449 * 255), Math.floor(0.08436 * 255), Math.floor(0.00424 * 255)],
  [Math.floor(0.65345 * 255), Math.floor(0.07902 * 255), Math.floor(0.00408 * 255)],
  [Math.floor(0.64223 * 255), Math.floor(0.07380 * 255), Math.floor(0.00401 * 255)],
  [Math.floor(0.63082 * 255), Math.floor(0.06868 * 255), Math.floor(0.00401 * 255)],
  [Math.floor(0.61923 * 255), Math.floor(0.06367 * 255), Math.floor(0.00410 * 255)],
  [Math.floor(0.60746 * 255), Math.floor(0.05878 * 255), Math.floor(0.00427 * 255)],
  [Math.floor(0.59550 * 255), Math.floor(0.05399 * 255), Math.floor(0.00453 * 255)],
  [Math.floor(0.58336 * 255), Math.floor(0.04931 * 255), Math.floor(0.00486 * 255)],
  [Math.floor(0.57103 * 255), Math.floor(0.04474 * 255), Math.floor(0.00529 * 255)],
  [Math.floor(0.55852 * 255), Math.floor(0.04028 * 255), Math.floor(0.00579 * 255)],
  [Math.floor(0.54583 * 255), Math.floor(0.03593 * 255), Math.floor(0.00638 * 255)],
  [Math.floor(0.53295 * 255), Math.floor(0.03169 * 255), Math.floor(0.00705 * 255)],
  [Math.floor(0.51989 * 255), Math.floor(0.02756 * 255), Math.floor(0.00780 * 255)],
  [Math.floor(0.50664 * 255), Math.floor(0.02354 * 255), Math.floor(0.00863 * 255)],
  [Math.floor(0.49321 * 255), Math.floor(0.01963 * 255), Math.floor(0.00955 * 255)],
  [Math.floor(0.47960 * 255), Math.floor(0.01583 * 255), Math.floor(0.01055 * 255)],
];

// * Variables
const baseColor = '#B8D8E0';

// run TPCS and set all 9 semantic color variables:
// action, reaction, alternate, accent
// highlight, info, warning, success, failure

// * TPCS mixins
function getColorScheme(color) {
  // the main mixin
  // sets all color variables

  const { repColor, repColorNumber } = getRepColor(color, turbo);
  const actionBase = repColor;
  console.log('getRepColor { repColor, repColorNumber }:', repColor, repColorNumber);
  const { reactionBase, altBase, accentBase } = getColorBases(repColorNumber, turbo);
  console.log('getColorBases { reactionBase, altBase, accentBase }:', reactionBase, altBase, accentBase);

  const { action } = getAction(actionBase);
  const { reaction } = getReaction(reactionBase);
  const { alternate } = getAlternate(altBase);
  const { accent } = getAccent(accentBase);

  // const { info } = getInfo();
  // .set-success();
  // const { warning } = getWarning(warningBase);
  // .set-failure();
  // .set-highlight();
  return {
    actionBase,
    reactionBase,
    altBase,
    accentBase,
    action,
    reaction,
    alternate,
    accent,
    // info,
    // warning,
  };
}

function getRepColor(color, list = []) {
  // this sets a representative color -- repColor -- out of a list
  // repColor is the color in the list closest to the given color
  // right now this measures by hue

  const iterations = list.length - 1;
  const firstChamp = list[1];
  const firstContender = list[2];
  let firstWin = null;

  const tournament = (champ, contender, index) => {
    if (index <= iterations) {
      const { closer, farther } = getCloserFartherHue(color, champ, contender);
      const winner = champ === closer ? champ : contender;
      const nextContender = list[index + 2];

      if ((champ === closer && index === 1) || contender === closer) {
        firstWin = index;
      }

      // iterate the tournament
      return tournament(winner, nextContender, index + 1);
    }

    return {
      repColor: champ,
      repColorNumber: firstWin,
    };
  };

  return tournament(firstChamp, firstContender, 1);
}

function getColorBases(colorNum, list = [], offset = 32) {
  // does some faux-color-wheel-spinning through
  // the turbo palette to find new colors
  // offset changes altBase and accentBase

  // this returns these variables:
  // reactionBase
  // altBase
  // accentBase

  if (colorNum >= 192) {
    return {
      reactionBase: list[colorNum - 128],
      altBase: list[colorNum - offset * 2],
      accentBase: list[colorNum - offset],
    };
  }

  if (colorNum > 128 && colorNum < 192) {
    return {
      reactionBase: list[colorNum - 128],
      altBase: list[colorNum - offset * 2],
      accentBase: list[colorNum - offset],
    };
  }

  if (colorNum > 64 && colorNum <= 128) {
    return {
      reactionBase: list[colorNum + 128],
      altBase: list[colorNum + offset * 2],
      accentBase: list[colorNum + offset],
    };
  }

  // if (colorNum <= 64) {
  return {
    reactionBase: list[colorNum + 128],
    altBase: list[colorNum + offset * 2],
    accentBase: list[colorNum + offset],
  };
  // }
}

// * Semantic colors
function getAction(actionBase) {
  // action means "do something," it's great for submit buttons
  // it's usually pretty close to the base color
	return { action: getLumafix(actionBase, baseColor, 38) };
}

function getReaction(reactionBase) {
  // reaction is for responding, usually after an action
	// a good second step or confirmation color
	// reaction is typically close to being a complement of action
  return { reaction: getLumafix(reactionBase, baseColor, 38) };
}

function getAlternate(altBase) {
  // alternate is meant to be an alternate color to action and reaction
	// it can sometimes make a good stand-in for other colors in the scheme
	return { alternate: getLumafix(altBase, baseColor, 38) };
}

function getAccent(accentBase) {
	// accent is meant to be used sparingly with @action, @reaction and @alternate
	// its extra saturation and lightness is good for drawing attention or balancing designs
	return { accent: lighten(saturate(mix(getLumafix(accentBase), accentBase, 20), 10), 5) }; // !refactor , probably doesn't work
}

/*
.set-info() {
	// info is a light blue or teal
	// it indicates innocuous, low-urgency information

	@blue: extract(turbo, 64);
	@teal: extract(turbo, 74);

	.set-distance-action() {
		getDistance(@blue, actionBase);
		@distance-action: @distance;
	}

	.set-distance-reaction() {
		getDistance(@blue, reactionBase);
		@distance-reaction: @distance;
	}

	.set-info-base() when (@distance-action < 70) or (@distance-reaction < 70) {
		@info-base: @teal;
	}

	.set-info-base() when (default()) {
		@info-base: @blue;
	}

	.set-info-final() {
		.getLumafix(@info-base, baseColor, 50%);
		@info:@lumafix;
	}

	.set-distance-action();
	.set-distance-reaction();

	.set-info-base();

	.set-info-final();
}

.set-warning() {
	// warning is a high urgency version of its pairing, info
	// its orange/yellow is a complement to info's teal/blue
	// remember: warning comes before the failure, failure after

	@orange: extract(turbo, 172);
	@yellow: extract(turbo, 152);

	.set-distance-action() {
		getDistance(@orange, actionBase);
		@distance-action: @distance;
	}

	.set-distance-reaction() {
		getDistance(@orange, reactionBase);
		@distance-reaction: @distance;
	}

	.set-warning-base() when (@distance-action < 70) or (@distance-reaction < 70) {
		@warning-base: @yellow;
	}

	.set-warning-base() when (default()) {
		@warning-base: @orange;
	}

	.set-warning-final() when (luma(baseColor) > 56%) {
		.getLumafix(@warning-base);
		@warning:softlight(mix(@lumafix, @warning-base, 70%), @warning-base);
	}

	.set-warning-final() when (luma(baseColor) <= 56%) and (luma(baseColor) > 32%) {
		.getLumafix(@warning-base);
		@warning:overlay(mix(@lumafix, @warning-base, 70%), @warning-base);
	}

	.set-warning-final() when (luma(baseColor) <= 32%) and (luma(baseColor) > 16%) {
		.getLumafix(@warning-base);
		@warning:overlay(mix(@lumafix, @warning-base, 60%), @warning-base);
	}

	.set-warning-final() when (default()) {
		.getLumafix(@warning-base);
		@warning:overlay(mix(@lumafix, @warning-base, 50%), white);
	}

	.set-distance-action();
	.set-distance-reaction();
	.set-warning-base();
	.set-warning-final();
}

.set-success() {
	// success indicates that an action worked or a positive response came through
	// its green tells users they're good to go

	@green: extract(turbo, 105);
	@lightgreen: extract(turbo, 130);

	.set-distance-action() {
		getDistance(@green, actionBase);
		@distance-action: @distance;
	}

	.set-distance-reaction() {
		getDistance(@green, reactionBase);
		@distance-reaction: @distance;
	}

	.set-success-base() when (@distance-action < 150) or (@distance-reaction < 150) {
		@success-base: @lightgreen;
	}

	.set-success-base() when (default()) {
		@success-base: @green;
	}

	.set-success-final() {
		.getLumafix(@success-base);
		@success:mix(@lumafix, @success-base, 20%);
	}

	.set-distance-action();
	.set-distance-reaction();

	.set-success-base();

	.set-success-final();
}

.set-failure() {
	// success's opposite and complement, failure's red tells the user something is wrong
	// good for negative server responses, missing info, or drawing attention to faults

	@red: extract(turbo, 225);
	@darkred: extract(turbo, 240);

	.set-distance-action() {
		getDistance(@red, actionBase);
		@distance-action: @distance;
	}

	.set-distance-reaction() {
		getDistance(@red, reactionBase);
		@distance-reaction: @distance;
	}

	.set-failure-base() when (@distance-action < 100) or (@distance-reaction < 100) {
		@failure-base: @darkred;
	}

	.set-failure-base() when (default()) {
		@failure-base: @red;
	}

	.set-failure-final() when (luma(baseColor) > 50%) {
		.getLumafix(@failure-base, baseColor, 75%);
		@failure: @lumafix;
	}

	.set-failure-final() when (default()) {
		.getLumafix(@failure-base, baseColor, 25%);
		@failure: @lumafix;
	}

	.set-distance-action();
	.set-distance-reaction();

	.set-failure-base();

	.set-failure-final();
}

.set-highlight() {
	// highlight is a bright color meant to evoke a highlighter and print text
	// depending on the base color, it can be cyan, magenta or yellow

	@yellow: extract(turbo, 152);
	@cyan: extract(turbo, 73);
	@magenta: mix(extract(turbo, 222), magenta, 60%);

	.set-highlight-base() when (red(baseColor) > 85) {
		@highlight-base: @yellow;
	}

	.set-highlight-base() when (red(baseColor) > 170) {
		@highlight-base: @cyan;
	}

	.set-highlight-base() when (default()) {
		@highlight-base: @magenta;
	}

	.set-highlight-final() when (luma(baseColor) > 50%) {
		.getLumafix(@highlight-base, baseColor, 33%);
		@highlight:overlay(@lumafix, white);
	}

	.set-highlight-final() when (luma(baseColor) > 90%) {
		.getLumafix(@highlight-base, baseColor, 25%);
		@highlight:overlay(@lumafix, white);
	}

	.set-highlight-final() when (default()) {
		.getLumafix(@highlight-base,  baseColor, 50%);
		@highlight:overlay(@lumafix, white);
	}

	.set-highlight-base();
	.set-highlight-final();
}
*/

// * Utility mixins
// many of these are "borrowed" from Strapless (http://strapless.io)
// some are from https://css-tricks.com/converting-color-spaces-in-javascript/
// And some are straight outta https://github.com/less/less.js/blob/master/dist/less.js
// I kinda wished I thought of using less.js straight up earlier

// .contrast-text-against(color: @background; @contrast-standard: 7; @mode: auto;) {
// 	// adds tone to background color until contrast standard is met
// 	// uses result as text color

// 	@start: 50%;
// 	const iterations = 10;
// 	@contrast: mix(tone, color, @start + index*5);
// 	index: 0;

// 	.tone(color);
// 	.contrast-text(1, tone, 1);

// 	.tone(color) when (@mode = tint) {
// 		const tone = white;
// 	}

// 	.tone(color) when (@mode = shade) {
// 		const tone = black;
// 	}

// 	.tone(color) when (default()) {
// 		.set-tone(color);
// 	}

// 	.contrast-text(@contrast-ratio, tone, index)
// 	   when (@contrast-ratio < @contrast-standard)
// 		and (index < iterations) {
// 		.set-contrast-ratio(color, @contrast);
// 		.contrast-text(@contrast-ratio; tone; index + 1);
// 	}

// 	.contrast-text(@contrast-ratio, tone, index) when (default()) {
// 		color: @contrast;
// 	}
// }

// .contrast-text-against(color: @background, @contrast-standard: 9)
// 				 when (color = white)
// 				  and (@contrast-standard >= 7) {

// 	color: #494949;
// }

// .invert-text-against(color; @contrast-standard: 7; @button: false;) {
// 	// always results in white text
// 	// darkens given background when needed to meet contrast standard

// 	const iterations = 10;

// 	.set-contrast-ratio(color, white);
// 	.darken-bg(color, @contrast-ratio, 1);

// 	.darken-bg(@bg-color, @contrast-ratio, index)
// 	   when (@contrast-ratio < 4.5)
// 		and (index < iterations) {
// 		@new-bg-color: darken(@bg-color, 5% + index);
// 		.set-contrast-ratio(white, @new-bg-color);
// 		.darken-bg(@new-bg-color, @contrast-ratio, index + 1);
// 	}

// 	.darken-bg(@bg-color, @contrast-ratio, index) when (default()) {
// 	background-color: @bg-color;
// 	color: white;

// 		& when (@button = true) {
// 			// button option lets us handle active state here when we know the color
// 			&:active {
// 				background-color: darken(@bg-color, 5%);
// 				color: mix(@bg-color, white, 5%);
// 			}
// 		}
// 	}
// }

// .color-text(color; @text-background: @background; @contrast-standard: 7) {

//   // darkens text against a background
//   // only works with lighter backgrounds
//   // not guaranteed to meet @contrast-standard

//   const iterations = 15;

//   .set-contrast-ratio(color, @text-background);
//   .darken-text(color, @contrast-ratio, 1);

//   .darken-text(@text-color, @contrast-ratio, index)
// 		 when (@contrast-ratio < @contrast-standard)
// 		  and (index < iterations) {
// 	@new-text-color: darken(@text-color, 5%);
// 	.set-contrast-ratio(@text-background, @new-text-color);
// 	.darken-text(@new-text-color, @contrast-ratio, index + 1);
//   }

//   .darken-text(@text-color, @contrast-ratio, index) when (default()) {
// 	color: @text-color;
//   }
// }

// .colorize(color) {
//   // sets a background color and makes sure text works with it
//   background-color: color;
//   .contrast-text-against(color);
// }

// .set-contrast-ratio(color1, color2) when (luma(color1) > luma(color2)) {
//   // sets variable @contrast-ratio to contrast ratio between two colors

//   @l1: unit(luma(color1))/100;
//   @l2: unit(luma(color2))/100;
//   @contrast-ratio: round((@l1 + .05)/(@l2 + .05),2);
// }

// .set-contrast-ratio(color1, color2) when (luma(color2) > luma(color1)) {
//   @l1: unit(luma(color2))/100;
//   @l2: unit(luma(color1))/100;
//   @contrast-ratio: round((@l1 + .05)/(@l2 + .05),2);
// }

// .set-contrast-ratio(color1, color2) when (luma(color2) = luma(color1)) {
//   @contrast-ratio: 1;
// }

function getDistance(color1, color2) {
  // sets variable distance to distance between two colors
  // distance is RGB space units

  // RGB space model isn't perfectly cubic, but instead
  // adjusted for human perception
  const rValuesAB = 2 * (color2[0] - color1[0]) * (color2[0] - color1[0]);
  const gValuesAB = 4 * (color2[1] - color1[1]) * (color2[1] - color1[1]);
  const bValuesAB = 3 * (color2[2] - color1[2]) * (color2[2] - color1[2]);

  return Math.round((Math.sqrt(rValuesAB + gValuesAB + bValuesAB)), 2);
}

/**
 * hslToRGB
 *
 * Adapted from: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 * By https://github.com/micro-js/hsl-to-rgb/blob/master/lib/index.js
 */
function hslToRGB (h, s, l) {
  // Achromatic
  if (s === 0) return [l, l, l]
  h /= 360

  var q = l < 0.5 ? l * (1 + s) : l + s - l * s
  var p = 2 * l - q

  return [
    Math.round(hueToRGB(p, q, h + 1/3) * 255),
    Math.round(hueToRGB(p, q, h) * 255),
    Math.round(hueToRGB(p, q, h - 1/3) * 255)
  ]
}

function hueToRGB (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1/6) return p + (q - p) * 6 * t
  if (t < 1/2) return q
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6

  return p
}

// Mix colors
// Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
// http://sass-lang.com
//
function mix(color1, color2, weight) {
  // TODO: Alpha/transparency support
  if (!weight) weight = 50;
  const p = weight / 100.0;
  const w = p * 2 - 1;
  const a = 0; // TODO: RGBtoHSL(color1).a - RGBtoHSL(color2).a;
  const w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
  const w2 = 1 - w1;
  const rgb = [color1[0] * w1 + color2[0] * w2,
      color1[1] * w1 + color2[1] * w2,
      color1[2] * w1 + color2[2] * w2];
  const alpha = 1;
  return rgb;
  // var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
  //     color1.rgb[1] * w1 + color2.rgb[1] * w2,
  //     color1.rgb[2] * w1 + color2.rgb[2] * w2];
  // var alpha = color1.alpha * p + color2.alpha * (1 - p);
  // return new Color(rgb, alpha);
}

function clamp$1(val) {
  return Math.min(1, Math.max(0, val));
}

function lighten(color, amount) {
  let hsl = RGBToHSL(color);
  hsl[2] += amount / 100;
  hsl[2] = clamp$1(hsl[2]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

function darken(color, amount) {
  let hsl = RGBToHSL(color);
  hsl[2] -= amount / 100;
  hsl[2] = clamp$1(hsl[2]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

function saturate(color, amount) {
  let hsl = RGBToHSL(color);
  hsl[1] += amount / 100;
  hsl[1] = clamp$1(hsl[1]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

function desaturate(color, amount) {
  let hsl = RGBToHSL(color);
  hsl[1] -= amount / 100;
  hsl[1] = clamp$1(hsl[1]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

// Convert rgb into relative luminance (0-100) in percentage
// Just like http://lesscss.org/functions/#color-channel-luma
// Following the standardized formula from https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
function luma(r, g, b) {
  /* eslint-disable no-param-reassign */
  r /= 255;
  g /= 255;
  b /= 255;

  r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
  g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
  b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);
  /* eslint-enable no-param-reassign */
  return 0.2126 * r + 0.7152  * g + 0.0722  * b;
}

function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (h.length === 4) {
    // 3 digits
    r = Number(`0x${h[1]}${h[1]}`);
    g = Number(`0x${h[2]}${h[2]}`);
    b = Number(`0x${h[3]}${h[3]}`);
  } else if (h.length === 7) {
    // 6 digits
    r = Number(`0x${h[1]}${h[2]}`);
    g = Number(`0x${h[3]}${h[4]}`);
    b = Number(`0x${h[5]}${h[6]}`);
  }

  return [r, g, b];
}

function RGBToHSL(rgbArray = [128, 128, 128]) {
  let [r, g, b] = rgbArray;
  // Make r, g, and b fractions of 1
  /* eslint-disable no-param-reassign */
  r /= 255;
  g /= 255;
  b /= 255;
  /* eslint-enable no-param-reassign */

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  if (delta === 0) h = 0; // No difference
  else if (cmax === r) h = ((g - b) / delta) % 6; // Red is max
  else if (cmax === g) h = (b - r) / delta + 2; // Green is max
  else h = (r - g) / delta + 4; // Blue is max
  h = Math.round(h * 60);
  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}

function getCloserFartherHue(compare, c1, c2) {
  // compares c1 and c2 to a given color, assigns a farther and closer
  // comparison is hue

  const diffMC1 = Math.abs(RGBToHSL(hexToRGB(compare))[0] - RGBToHSL(c1)[0]);
  const diffMC2 = Math.abs(RGBToHSL(hexToRGB(compare))[0] - RGBToHSL(c2)[0]);

  if (diffMC2 > diffMC1) {
    return {
      closer: c1,
      farther: c2,
    };
  }
  return {
    closer: c2,
    farther: c1,
  };
}

// .set-tone(color) {
//   // sets variable tone to white or black, depending on which is better for text contrast

//   .set-contrast-ratio-black() {
// 	.set-contrast-ratio(color, black);
// 	@contrast-ratio-black: @contrast-ratio;
//   }

//   .set-contrast-ratio-white() {
// 	.set-contrast-ratio(color, white);
// 	@contrast-ratio-white: @contrast-ratio;
//   }

//   .set-tone(color) when (@contrast-ratio-black > @contrast-ratio-white) {
// 	const tone = black;
//   }

//   .set-tone(color) when (default()) {
// 	const tone = white;
//   }

//   .set-contrast-ratio-black();
//   .set-contrast-ratio-white();

//   .set-tone(color);
// }

function getLumafix(color, compare = baseColor, strength = 100) {
  // gets lumafix of a version of color with luma similar to compare

  const iterations = 24;
  const compareColor = hexToRGB(compare);
  let tone = 'black';

  // tone keeps lumafix from flipping back and forth
  // between shading and tinting
  if (luma(color) > luma(compareColor)) tone = 'black';
  if (luma(compareColor) >= luma(color)) tone = 'white';

  const lumafix = (colorToFix, compare, index) => {
    if (index <= iterations && luma(colorToFix) < luma(compare) && tone === 'white') {
      const newColor = lighten(colorToFix, 0.5 * index);
      return lumafix(newColor, compare, index + 1);
    }
    if (index <= iterations && luma(colorToFix) > luma(compare) && tone === 'black') {
      const newColor = darken(colorToFix, 0.5 * index);
      return lumafix(newColor, compare, index + 1);
    }
    // ? lumafix(colorToFix, compare, index)

    return mix(color, colorToFix, (100 - strength));
  }

  return lumafix(color, compareColor, 1);
}

// * Temp
// let baseColor: #4180DD;

// .colorz {
//   color: baseColor; // base-color
//   color: @action; // action
//   color: @info; // info
//   color: @success; // success
//   color: @reaction; // reaction
//   color: @warning; // warning
//   color: @failure; // failure
//   color: @alternate; // alternate
//   color: @accent; // accent
//   color: @highlight; // highlight
// }

// .colorz {
//   color: #4180DD;
//   color: #3585fd;
//   color: #1c9ecd;
//   color: #3ee06b;
//   color: #d99623;
//   color: #e5e80e;
//   color: #d93104;
//   color: #3dd448;
//   color: #0ceadb;
//   color: #ff61e9;
// }

console.log('getColorScheme:', getColorScheme(baseColor));
