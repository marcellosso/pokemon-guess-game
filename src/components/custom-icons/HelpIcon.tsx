import React from 'react';

const HelpIcon = () => (
  <svg width="90" height="90" viewBox="0 0 90 90"
    fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M4 65V12H85.5V67.5H56L46 78.5L33.5 65H4Z" fill="#2382FF"/>
    <rect width="90" height="90" fill="url(#helpIconPattern)"/>
    <defs>
      <pattern id="helpIconPattern" patternContentUnits="objectBoundingBox" width="1"
        height="1">
        <use xlinkHref="#image0_16_229" transform="scale(0.00195312)"/>
      </pattern>
      <image id="image0_16_229" width="512" height="512"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAIUAAACFABYaxc2AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15/H71nP/xx4solEiKMINGqFSyk5+SZIlirFnLMpYpjD37EmnGLlnHSPZlEkpUiux7QiVLlmQtFZLq9fvjnO/4+ur7/ZzrnHNd55zr/bjfbp+bcJ33+xXfPu/ndd5bZCaSJKkslxu6AEmStHgGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQOt1eTgi1gM27KkWSZLUzMWZeUGXBjoFAGAn4DMd25AkSbM5Edi5SwNOAUiSVCADgCRJBTIASJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVKCutwG29e3M3GGgviVJGoWI2Av43yH69g2AJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIAOAJEkFMgBIklSgoa4DljSAiLgCsFH9syHwV+D8+uePmZkDlidpgQwA0hKIiOsAN17t51+Aq/G3wX7Vz/rraCYj4gL+FghW/ZwFnLbaz+mZ+ef5/J1I4xMR/wFs1eLRQzPz233X0xcDgDQhEbE5cEdgG/422G9F9W2+c/P8LSisS0bET/n7UPA14GuZeUkPdUhjc2/gTi2e+yRgAJA0u4jYBNgZ2AW4M7D1oAVVAvjn+ueuq/3n50fEZ4HPAMcD387MSweoT1IDBgBpRCJiQ6oB/85Ug/72VAPuFGwE3LP+ATgnIk6kCgPHZeb3BqtM0j8wAEgDi4jLAbsCjwDuA1x52Ip6c3Vgr/qHiDgFOAw4PDN/OWRhktwGKA0mIraJiFcAPwU+BTyE5Rn8L8u2wMHAzyLikxGxd0RcaeiipFL5BkBaoIjYFNgbeDhwi4HLGcrlgd3rn/Mj4oNUbwY+6zZEaXF8AyAtQERcLyLeAPwMeC3lDv5r2gjYFzgB+GZEPKCeEpE0Z/6DJs1RRGwZEW8Dfgg8Edhg4JLGbHvg/cB3I+LhEeEbSmmODADSHETE1hFxONUe+UcBVxi4pCm5CfBO4LSIeGxEXHHogqRlZACQehQR20XEh4BTqBb1XX7gkqbshsCbgR9GxP4GAalfBgCpBxGxcUS8DvgG8K9MZ+/+FFyXat3EdyJit6GLkZaFAUDqKCIeSvWqfz/8xj9PWwGfiogP1HcfSOrAACC1VM/znwC8C9h84HJm8VfgHODnwK+BPw1bzszuD5waEU91oaDUnv/wSDOKiKsALwCezLgW9/0W+MFqP2cAPwHOAy5Y9ZOZF635YL31bsM1fjamulXwJqv9XJ9xfHHYEPgv4JER8YTM/NzQBWmpvYXqYp9ZfbfvQvpkAJBmEBE7U33jv+7ApfwS+Gz98xXgB5n5h7aN1Zf2nFf/rO4zq/+biNgAuBFVGLg51X0Ft2S43yXbAp+NiLcCT/KaYs1DZr5n6BrmwQAgNVB/Qz4AeCHDzPP/BDiRetDPzDMGqIHMvBD4Tv3zQYCI2IjqiuJVNxbuwOLfEjwGuF1E3D8zT11w39IkGQCkFUTENYHD+furbxfhx1QH47wvM0d7p3hmng8cVf8QEVenCgIPoboZcFHb97YFvhoRj8vMdy+oT2myDADSOkTEHYH3AVssqMuzgA9QDfpfXlCfvcrMc4APAx+OiGsAD6K6++DWC+h+Q+DwiLgTsH/9xkLSZRjDYh5pdKLybKo58HkP/gl8ArgLcL3MfMpUB/81ZebvMvOQzLwNcFPg5VS7D+btMcCXImKrBfQlTZIBQFpDRFyVakB+GfOd778IeAewbWbukZnH1YvxllJmnpqZBwA3AB5JdXbCPG0PfC0i7jvnfqRJMgBIq4mIzakW2919jt2cCxwEXD8z983M782xr9HJzIsz853A1sADgHmub9gI+GBEPGGOfUiTZACQahFxQ+DzVKvY5+HPwEupXvM/OzN/Oad+JiEzL83MD2bmDsC9gC/NqavLAYdExIvm1L40SS4ClICI2AE4GrjWnLp4L/CszPzpnNr/P/WWxa2AawPXqH82Xe2vV/17gPPrnwtW++tV//4XVNv9zsjMS+ZZc2Z+HPh4ROwBvI5qmqBvz4+IawGPX+apFvUvIv4JuHKLR3+emRf0XU9fDAAqXr1i/KNUJ9/17cvAUzLzi3NoG4CI2BK4FdWBPLcCdqRaDd+XCyPie/xt//93gO/M4w1GZn48Io4DngM8nf63ED4W2DQi9s7Mv/TctpbXYcCdWjx3H+CInmvpjQFARYuI+wDvATbouelfAU8F3pOZ2WfDEXErYE/+Nuhv0mf7l2EDqlCx4xp1/Bj4WP1zYmb+tY/O6tP8nhsR7wLeSHWmQJ/uCxwTEXt2OT1RmjrXAKhYEfEwqtPs+h78jwBulpnv7mvwj4htIuKlEXEG1dG/z6E6mGjeg/+63ADYH/g08Nv6lr6H1Xv/O8vM0zJzV2Bv4Ow+2lzNnYAT60OLpCIZAFSkeq75v+l3m9/5wL6ZeZ/M/E3XxiLihhFxQER8BziFatDfsmu7c3JVqlv6DgN+FRGfjYiHRETny5Iy873ANlRvGvq0PdW6gyv13K40CQYAFSci7kB12l6fU2CfA7bLzHd0bag+hOgzwA+BA6mOuJ2Sy1PdDXA48JOIeE5EbLrCM+uUmb+nmvZ4GtV1xn25PfABrxVWiQwAKkpEbEv1TbKvb32XAM8Gds7Mn/TRYD1t8IM+2hqBLai2Pv4sIt4aEdu0bSgrr6R6fd/nboo9qK57lYpiAFAxIuKfgWOAvuZ9zwf2zMyD5rCt7JCe2xvaBsCjgVMi4lP1W5hW6h0VN6ffKYF9IuKgHtuTRs8AoCLUN/p9iv7O9f8psFNmfqKn9v5OffvfSfNoewR2A06KiMMjotX/H6tNCTynx7qeGRFP7rE9adQMAFp6EbEh1VW1fV0M8xXgNpl5ck/trc2yvQVY00OA0yLimREx837/ekrgZcC+VFMxfXhVROzdU1vSqBkAVIK3Uu2X78MHqeb7Z96WFhFbRMSrI6LpzoMP0//2t7HZkOpehFMiotX9C/XCy/sCfVz9G8DbI2L7HtqSRs0AoKUWEY+luo++D4cCD6wPqpm1jvtRnaD3ZODfmzxTH6xTyuK0GwFHRcTHIuI6sz6cmUdSnYtwbg+1bEC1M6DP0xSl0TEAaGlFxM2A1/bU3KHAE2c92CcirhoR76R6c7Dq0J6XzDD3/Rbg4ln6nLg9gG9FxO6zPpiZn6PaIdDHEcVbAW/qoR1ptAwAWkoRcRWqvf59nPLXdvC/E3Ay8PA1/quNgNc0aSMzf8GIzxKfk02Bo+uTD2c6qKlel3EHqouMunpIRDyqh3akUfLwCy2rQ4Gb9NTOTIN/PWi9jOrQmrWF7PtHxN0y85MNmnwDcL+m/a/mAqoAcjbwW+B3a/zrRVRz8BtShZJVf301qv/ttgM2b9FvH4Jqhf9OEfHgWS4eyswfR8RdqQ5n6npU8usj4suZeUrHdjRtv6e632NWfaxLmRsDgJZOROwDPKyHptoM/lcC3gfcu8HHD4mIbTJznb8kMvPEiPgu1XG4a/Nn4FvA1+qfrwKndT2fICI2A25GFQa2A3YB/rlLmzO6E9WUwN6ZeVzThzLze/Vxz8fS7hrXVa5EtR7gVpn5xw7taMIy875D1zAPTgFoqUTE1lTfmLv6MLMP/psCx9Ns8Ae4Ic33sV/WlsDfUc1T7wxcNTNvn5n7Z+Zhmfn9Pg4nysxfZ+ZxmfnqzNwnM69PFQSeS3XVca83Ha7FZsCnIuLpszxUHxh0P7qvobgpy78lUwUyAGhpREQAb6fbNz6ovkk/YsbB/wbA54HbztjXMyKiyVTFu4DzqE4ffBdwD+Bamfn4zDwxMxe2UDAzv5OZB2bmbYFrU53w9/k5d3s54OCIePEsD2Xm0cA+dA8qj2i7TVEaKwOAlsmjmH0AXtOvqY73bfy6NyJuAXyRdgcNXZHqzvt1yswLqF6/b56ZD8/Moxc56K+jrl9l5tszcyfg1lTTH/Os63kR8V+zPJCZhwNP7aHvN0RE31dHS4MxAGgp1HfQdz3L/SLgvpnZ+KKZiNgVOIFui+V2iYiHrvShzPxGmzMIFiUzv5qZD6aa2vhP+tmTf1meGhGH1G98mtb2auDdHfu9IXBAxzak0TAAaFkcBFyjYxuPy8xZX2WfCfyhY78Ar4yIvi4pGlRm/iwznwH8E9X/LxfNoZsnUJ3YN8vvsMcBp3fs9xkR0deR0tKgDACavIi4LdXr/y4OqY+UnUlmnkG1CK/rvvPNgJd3bGNUMvP8zHw21e6FPm/uW2Uf4PCIaLSbqZ5GeQDdtmatTz+LTKXBGQA0afWe+zdS7Rtv6zRgphXmq6tDwC50CwGXsKTn/mfmGZl5b+BuwKk9N/9gZhiQ61sWu974t1tEPLBjG9LgDACausdT3Q3f1sXAw7rOrWfmD6hCwFktHv8RcMfMfGGXGpqKiA0jYsuIuG1EbLuoqYfMPIZqC+ELgc5bFFfzbxHxxBnqeDPw/o59vjoirtqxDWlQHgSkyaoHrpd2bOZlmfnVPurJzB9ExC7AZ4CmZ/2/A3hSZp7fRw2rRMS2VJfjbEW1QHH1n6tcxucvpAovv6j/ddVfnwkcl5nn9FFXfcHRiyLiJOA9VFMffXhNRHw/M49v+PnHAreiWtjXxrWpznB4ZsvnNSERcTBVeJ3Vi+rzKEbJAKAp2x/YuMPzXwde0lMtAGTm6XUIOIFqkFibc4FHZeZH+ui3DkO7AbvXP7PeqLcB1WB4WQPixRHxWao7CT46yy6JtcnM4yJiB+C9VKf9dbUe8MGIuHVm/rBB/+dFxOOBYzr0+YSIeEVm/r5DG5qGW9Puz+moL5RyCkCTFBEbAU/q0MSFVK/+e9+znpmnUy0MXNv59T8Dduo6+EfE5hHxvIj4IvAbqtfa+zL74L+S9YA7A68DzoyIr0fE8yOizTei/1Of778r1eLHPk4U3AQ4sumr+cz8FPChDv1tSLc/g9KgDACaqicAXeauX5aZ32/ywfp8/5nUIWAX/jEEnAzcLjO/O2ubq9Vz3Yh4HfBj4MVUhx/NdGteRzsCLwK+HRFnRMSjZ721b5XMvCQzDwD2pp8DhLYG3jPD9sCnAF3O+N+vDqPS5BgANDn1gPwfHZr4OfDKhn1dmWqgO2DGPedk5mlUIWDV6v7jqRb7tdotEBE3iIg3Az8E9qO6qGZoWwJvBb4TEU3vQPgHmfk+qnP7+zgz4J40nJvPzJ9ThZm2rk4VRqXJMQBoih5Lt8Vjz8nMPzX87EuBGwEHUl1Is655/X+wWgh4A3D3zDxvpkqBiLhRRPwP1SE2j6U6Pnhsbgp8NCI+FxG3a9NAZn6U6iKlPk47fH5E3KjhZ18DfK9DX09p85ZIGpoBQJMSEVekw559qoV/72rY1635+zneXaneBtxtlg4z89TM3C8zZ/p2G5UnA98BHsE0Fu3uBHwhIj4SETee9eF6q+DdgQs61rEB8OaGff6Vbt/iN6f7QVTSwhkANDX70G2R21Ob3PIXEVcA3sY//jNyTeCoiPjP+jNzERGbAUcBr6Y6fW5q7gOcEhEvnuXMfoDMPJFqC2PXNwG7RMS+M/TZ5bTCZ8zzz4M0DwYATU2XW92OqH/RN/Es4GZr+e8CeBrw+Yhou498reo3DCdTnZw3ZesBzwM+FBH/cPbAutR7p/fpoYb/rMNUEwd26Od6VMcMS5NhANBk1HPLTed115Q0vMktIm4KPLfBR28FfDMiHtyypjX7vWJEvIrqm3+X2wXH5r7ASRFxvVkeysz3Ay/r2PcmwGsb9vdl4NgOfT2iw7PSwhkANCUP6/Ds0U23/QGH0nyh3VWptp29vd4x0EpEbAp8gWpbWpd7DcZqB+Cr9cVNs3ge3S8SelBE3L3hZ7u8Bdg1Ivo+g0GaGwOAJqFe/NflApZXNeznzrQ78Wtf4OttDseJiE2ovnneokW/U7I5cEJENA5ymXkp8BC6rdIHeFWTtQiZeQJVEGvjclS1SpNgANBU3IPqdW4b387M4xp+9vkt+wC4CTOeDBcRVwM+DWzfod8pWR84LCIaH8Fc35OwF9B06+ZluQnVwsQmurwFeHiHZ6WFMgBoKrq8/m/67f//0e1c+l8zwxbFiNgY+BTVyXqLdh7VNci/oJ8T+Gb13Pos/kbq2xa7hDOAZzfs6yjgWy372CYihvj/U5qZAUCjV190c8+Wj/8SeF/Dz76gZR+r7Nf0Ypj6+NhPUi0knKfvAgdRBag7U30T3igzN87Mm2Tmdam+lW9R17In8ESqM/K77sVfyevqi5Oaeg3VOQ5t3TIidmv42bd06Me3AJqEKRwsIj2A9nvhD2lyAE9E3IFqgGzryMz8QJMP1qfGHU11hn/fLgFOAo6kurmvyc14l1IFpdXvLXhjRKxP9b/JnlQn9M10CmIDq27wu03DOi+JiMcAX6X93QcHUE25rOT9VIGjzamLD46Ip83joimpT74B0BR0WVh1eMPPdXm9/Aeg8ets4BXAHTr0d1kurNu9VmbunJmvajKorktm/iUzj87Mx1EdvnRXun0DvyzXYLYb/L5Jwymdtdi5yU6E+k3Ox1v2sRnV/1bSqBkANGr1wNDqbHngS5l5ZoM+rkK19a7tlbTPz8yzmnyw3mXw7y37uSyXAu8EbpSZz8rM3/bY9v/JyqeppgkeAvykx+ZnvcHvhVQ3IbbV6DwI4LAOfeze4VlpIQwAGrv/R/upqvc3+VBm/jEz70p1oc3rqRbINXUWDc+cr8PMO+hvn/8xwM0z85H1rXZzVweB9wA3prqR8Zyemr4n1VqFJjX8iW43+O3R8J6Co4C2gWqWtQ3SIAwAGru28/IJfHCmBzJPy8z9getSfUtvcnDQwZn5l4ZdvAb4p1lqWotLgadl5t0y8+Qe2ptZZl6Uma8Gbk51bHEfnh4ROzf87LuBFd/urEUAD1rpQ/UlQU0XkK5p24i4ZstnpYUwAGjs2gaAkzLzF20ezMzzM/OQzNwauAtwBNXiujWdTcPV4hFxL/o52/484F6Z+coe2uqsnmK5A/DRnpo8uOGBPRcDB3fo534NP9d2GiCAnVs+Ky2EAUCjVR+PO/PJerVGK/JXkpnHZeZ9gC2pFtn9brX/+uDMXPHGuoi4Bt22la3yI+B29T710cjMC6gO2Xl5D83diuaX6vw3VQhrY9uIuEmDz30N+E3LPpwG0KgZADRmu9B+vvwjfRaSmWdm5rOopgf2oTrAp9HcP/Ac4FodS/gKcOvM7Hok7lzUawMOoLoQp+1iylUObHK1bmZeSLcdAfdv0EcCn2nZfpdtpdLcGQA0Zm1/gZ7RdFX+rDLzwsz8n8zcvV6Mtk71Ub+P6djtz4B7Z+bvVvzkwDLzMJqvsl+bLYHHNfzsocC5LftpOg3QNgDcOCL6PjtB6o0BQGO2a8vnPtdrFd08Htiww/N/AvbKzF/1VM/cZeZBND9/YW2eV5+WuFJfFwD/27KP7SJiqwafO75l++A0gEbMAKBRiojNgBu1fHwUAaA+SW//js3sk5nf6KOeBXs08OUOz18TeGbDz36oQz9NpgFOp9ru2cZOLZ+T5s4AoLFqskBrbU7qrYpuHkq3uf+XND1eeGzqrZF7AV3OJ3hKvRB0JcdSncbYxr0bfq7tNECXP8fSXBkANFZNDmq5LGfXN8cNqt7K9tQOTZxCdeLdZGXm2VQXC7V1ZRoM0PVdD0e27GP7JgsOaT8N0PbPsTR3BgCNVdtfnGP59r8H1cmCbT2rvqRn0jLzSOALHZrYq+Hn2k4DrE91FPFKvtSy/S0iossaEGluDAAaq7YBoO0v6r51ucDohMz8RG+VDK/pXP5l2a2+q2ElxwDnt+xjxwafOYPLPgyqCd8CaJQMABqrtr80B3/9X+uy+vsZvVUxApl5EvCxlo9vQIOLdeo1B59v2ceKAaCeZmh79LABQKNkANDo1HOyN2j5eKcrcPsQEdtQXQnbxgcy86t91jMSz6a6w6CNptMAbXdLNHkDAHBay/YNABolA4DGaEva3QCYVMflDq3LCXCv7a2KEcnM7wLHtXz8nhHR5M/DN1u2v33Dq4gNAFoqBgCNUdtfmGc1OZt/AdoGgLMZzxqGeWh7YM8mwB0bfK7tG4CrAE0OBDIAaKkYADRGU379fzngTi0fP3IZVv6vw0dpf0/Ang0+82Panwdw8wafaRsA2v55lubKAKAx2rjlc2f0WkU7OwBXb/ls22/Ik1Dfz/CVlo+vuFWvvrin7TTAFg0+c3rLtjdqcsWxtGht5lmleWu7b/q6EfHkXiuZ3e1aPnce3c6cn4ojgNu0eK7ppTrfBnZu0X6T0Nb2WuDLUR1q9MeWz0tzYQDQGK14Ccxa3LX+maJP11vNlt3HgZe3eK7JN3SAtpcmXW2lD2TmRRFxEXDFFu1vhAFAI+MUgMaobQCYssHXLyxI27/PTerLlVbS9mrgFQNA7byW7Zf4Z1ojZwDQGJX4y7LtbXOTUu/SaDtIN7lYqW3bTddttD1tsMQ/0xo5A4DGqMRflr8cuoAFavv32mQaYN5vAAwAWhoGAI1Rib8sDQAra7IQ0CkAqSEDgMaoxF+WRUwB1Nr+vc7zDYBTACqOuwA0RiVen9p29foUtd1Od80GnzkbeHOLti9s+Lm2K/mb3GgoLZQBQGN0+aELGMDFQxewQE1ft69pxW/3mXkO8LiW7TfRZgsgQAlbPDUxTgFIWrSme/rXNIZpkiu3fO5PvVYh9cAAIGnRmp7qt6YxLJQ0AGhpGAAkLZoBQBoBA4CkhYmIKwCbtnzcKQCpRwYASYt0PaDNzXjnZ+YYztI3AGhpuAtAY/R+2l8JPFWXDF3AgrS9rGnw1//1lb6btXx8DOFF+jsGAI1OZj5p6Bo0N3u1fG4Mr/+3oP02wLP7LETqg1MAkhYiIq4K7NLy8R/1WUtL12/53K/rS5CkUTEASFqUe9D+G/RRfRbS0g1aPvfTXquQemIAkLQobV//Xwh8ss9CWrp+y+fO7LMIqS8GAElzFxGbA3u0fPzYkewAuH7L5wwAGiUDgKRFeB7tL8Q5os9COti65XMGAI2SAUDSXEXElsBjWz5+KfCxHstpJSLWA27e8nEDgEbJACBp3l4KXKHls1/MzF/3WUxL2wEbtHz25D4LkfpiAJA0NxGxI/DADk2M5fX/rVs+9/vM/HGvlUg9MQBImouIWB94I+2O/oXq9f9H+quok7YB4Bu9ViH1yAAgaV7eAtymw/PvzswxHAAE7QPA13qtQuqRAUBS7yLi6cDDOzRxIfDcnsrpJCI2BW7a8vGv91mL1CcDgKReRcQewEEdm3l9Zo7lBL270/53pQFAo2UAkNSbiLg58B66/W75PfCyfirqRdsDjH7nAkCNmQFAUi8iYi/gc8BGHZs6MDPP7aGkziLiCsDuLR8/rs9apL4ZACR1FhEHUK3Yb3va3yo/AQ7pXFB/dgI2bvnsGO4vkNZqvaELkDRdEbEB8HZg756afG5m/qWntvrQ9vU/wDG9VSHNgW8AJLUSEbcHPk9/g/9HqdYPjEJ9/O8DWj5+cmae1Wc9Ut8MAJJmEhFbRcRHqAb/HXtq9hTgoZmZPbXXh/sA1235rN/+NXoGAEmNRMRmEfFG4LtUg2NffgfcOzMv6LHNPuzf4Vnn/zV6rgGQtFb1ITh7AHtSrYa/Us9d/BW439i2y9XbGXdq+fi5wEk9liPNhQFAEgAREcA1qV5770I16N8euPwcu90/M0+YY/ttdfn2/4HMvKi3SqQ5MQBIA4uI/YBtBup+U2AL4DrAtWl/bW8bh2bmmxbYXyMRcU3gwR2aeFdftUjzZACQhndP2h82M1VH0+1b9jw9Bli/5bM/plocKY2eiwAlLdohVIv+Lh66kDXVW/+e0KGJw0e2k0FaK98ASFqUi6nm/A8dupB1uC/VdEhbvv7XZBgAJC3C74H7Z+bxQxeygi7TEl/KzB/0Vok0ZwYASfN2KnCvzDxj6ELWJSJ2BO7QoYk39FWLtAiuAZA0T8cAtx374F97Todnfwq8v69CpEUwAEiah58ADwXunpl/GLiWFUXEvajm/9t69RgXNUrr4hSApD79DjgQOGQqh+FExIZ0u4L4XOBtPZUjLYwBQFIf/gy8BnjFFL7xr+FA4Hodnj90hPcYSCsyAEjq4hLgf4AXZOYvBq5lZhFxa+DfOzTxF+B1PZUjLZQBQNKs/gIcDxwBHJmZZw9cTyv1oT9vpdtaqLdO9e9fMgBIauJc4CiqQf+TmXn+wPX04WnAdh2ePw94cU+1SAtnAJC0uouAXwJnAb8AzqTayndCZv51yML6FBFbAs/v2MwrMvM3fdQjDcEAIE3Xe4GTOzyfVKv2f0E14J8F/LaQs+zfBFypw/M/B17dUy3SIAwA0nQdmZnvG7qIqYmIhwN36djM8zLzz33UIw3Fg4AkFSMirg28qmMzJwOH9VCONCgDgKQi1Af+fAK4RodmkupGw0v7qUoajgFA0tKrt/x9ELh5x6benJkn9lCSNDgDgKQSHArcrWMbPwOe0UMt0igYACQtT/+5gAAAC6hJREFUtYh4LvDoHpp67JKcfyABBgBJSywiHga8pIem3pmZn+yhHWk0DACSllJE7Aq8vYemzgae0kM70qgYACQtnYi4GfBh4Aodm7oUeFhmntO9KmlcDACSlkpEXIfq3oKNe2juxZl5bA/tSKNjAJC0NCLi6lR7/a/bQ3PH0s/6AWmUDACSlkJEbAV8Cdi+h+bOAvb2wB8tMwOApMmLiN2ALwNb9dDcxcADvelPy84AIGnSImI/4Gjgaj01+bTMPKmntqTR8jZASZMUEVcAXg/8W4/NviozX9tje9JoGQAkTU5EbAJ8CNilx2bfCzytx/akUTMASJqUiLgp8DFgyx6bPQ54ZGZmj21Ko+YaAEmTERF3p1rp3+fg/03gPpl5UY9tSqNnAJA0ehFx+Yh4FtU3/6v22PQZwD285EclcgpA0qhFxA7A24Bb9Nz0qcCumXl2z+1Kk+AbAEmjFBFXioiDgK/S/+B/CrBzZp7Vc7vSZPgGQNLo1Df5vQn4lzk0/y1gt8z87RzalibDNwCSRiMitomIj1Gdwz+Pwf9rwJ0d/CUDgKQRiIjrRcR/AycDe8ypm+OBu3i1r1QxAEgaTERsGhEHA6cD+zC/30mHArtn5h/m1L40Oa4BkLRwEbEdsD/wEGCDOXZ1MfCkzHzjHPuQJskAIGkhIuLywL2pBv6dF9DlOcD9M/O4BfQlTY4BQNJcRcS2wIOovu1ff0Hdfh/YMzN/sKD+pMkxAEjqXUTcGHhg/bP1grs/lOpK3z8tuF9pUgwAkjqLiABuSbWCf09g+wHK+DXwqMz8+AB9S5NjAJDUWkTcA/hX4J7A5gOWchSwb2b+asAapEkxAEjq4lXAjQfs/4/AMzPzkAFrkCbJACBpqj4MPCUzfzZ0IdIUGQAkTc3pwH6Z+amhC5GmzAAgaSr+BBwI/FdmXjR0MSrKM4BNWjz3jb4L6ZMBQNLYXQwcDrwgM386dDEqT2Z+Zega5sEAIGmsLgbeBRyYmT8cuhhp2RgAJI3NxcBhVAP/j4YuRlpWBgBJY3Ee1Tf+V2bmj4cuRlp2BgBJQ/s68CbgvZn5x6GLkUphAJA0hD8C7wXelJlfH7oYqUQGAElDuFtmnjR0EVLJLjd0AZKKdPHQBUilMwBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBVpv6AIktfbUiHjQwDVcZ+D+JbVkAJCm65b1jyTNzCkASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQF4GJA3vlcD7hi5iwX44dAFS6QwA0sAy89ND1yCpPE4BSJJUIAOAJEkFMgBIklQgA4AkSQUyAEiSVCADgCRJBTIASJJUIM8BkAYWEdsBmwxdx4J9IzPPG7oIqWQGAGl4BwO7D13Egt0O+NLQRUglcwpAkqQCGQAkSSqQAUCSpAIZACRJKpABQJKkAhkAJEkqkAFAkqQCGQAkSSqQAUCSpAIZACRJKpABQJKkAhkAJEkqkJcBSdN1JnDuwDXcBFh/4BoktWAAkKbrWZn5viELiIhTgRsPWYOkdpwCkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQAYASZIKZACQJKlABgBJkgpkAJAkqUAGAEmSCmQAkCSpQOsNXUBbEfFGYOuh61giD8rMs4cuQpK0GJMNAMCOwG2GLmKJbDB0AZKkxXEKQJKkAhkAJEkqkAFAkqQCGQAkSSrQlBcBSqW7U0QMvXhz44H7l9SSAUCarsfVP5I0M6cAJEkqkAFAkqQCGQAkSSqQAUCSpAIZACRJKpABQJKkAk15G+AzgE2GLmKJ/HroAiRJizPZAJCZnx26BkmSpsopAEmSCmQAkCSpQAYASZIKZACQJKlAk10EKC2RLwAXDl3Egv1+6AKk0hkApIFl5ouHrkFSeZwCkCSpQEO9Adg4IvYaqG+piQSOyczSXs0vlYjYHrjB0HVI63CboToeKgBcH/jfgfqWmjomIvYyBExTRNwNOAJYf+hapDFyCkBau92BIyJig6EL0Wwc/KWVGQCkdTMETIyDv9SMAUBamSFgIhz8peYMAFIzhoCRc/CXZmMAkJozBIyUg780OwOANBtDwMg4+EvtGACk2RkCRsLBX2rPACC1YwgYmIO/1I0BQGrPEDAQB3+pOwOA1I0hYMEc/KV+GACk7gwBC+LgL/XHACD1wxAwZw7+Ur+6XgZ0LnBiH4VIA9oB2LiHdlaFAC8Q6tkcBv9vU/3+kqbqW10biMzsoxBpsiJiR+BY4Oo9NXkMYAjoyRwG/3cAj87MS3tqT5okpwBUvMz8BnAX4JyemnQ6oCcO/tL8GAAkDAFj5OAvzZcBQKoZAsbDwV+aPwOAtBpDwPAc/KXFMABIazAEDMfBX1ocA4B0GQwBi+fgLy2WAUBaC0PA4jj4S4tnAJDWwRAwfw7+0jAMANIKDAHz4+AvDccAIDVgCOifg780LAOA1JAhoD8O/tLwDADSDAwB3Tn4S+NgAJBmZAhoz8FfGg8DgNSCIWB2Dv7SuBgApJYMAc05+EvjYwCQOjAErMzBXxonA4DUkSFg7Rz8pfEyAEg9MAT8Iwd/adwMAFJPDAF/4+AvjZ8BQOqRIcDBX5oKA4DUs5JDgIO/NB0GAGkOSgwBDv7StBgApDkpKQQ4+EvTYwCQ5qiEEODgL02TAUCas2UOAQ7+0nQZAKQFWMYQ4OAvTZsBQFqQZQoBDv7S9BkApAVahhDg4C8tBwOAtGBTDgEO/tLyMABIA5hiCHDwl5aLAUAayJRCgIO/tHwMANKAphACHPyl5WQAkAY25hDg4C8tLwOANAJjDAEO/tJyMwBIIzGmEODgLy0/A4A0ImMIAQ7+UhkMANLIDBkCHPylchgApBEaIgQ4+EtlMQBII7XIEODgL5XHACCN2CJCgIO/VKbIzKFrkLSCiNgROBa4ek9NHgPsBeyMg79UJAOANBFzCAFfBnbAwV8qkgFAmpA5hIC+OPhLE+MaAGlC5rAmoA8O/tIEGQCkiRlZCHDwlybKACBN0EhCgIO/NGEGAGmiBg4BDv7SxBkApAkbKAQ4+EtLwAAgTdyCQ4CDv7QkDADSElhQCHDwl5aIAUBaEnMOAQ7+0pIxAEhLZE4hwMFfWkIGAGnJ9BwCHPylJWUAkJZQTyHAwV9aYgYAaUl1DAEO/tKSMwBIS6xlCHDwlwpgAJCW3IwhwMFfKoQBQCpAwxDg4C8VxAAgFWKFEODgLxXGACAVZC0hwMFfKlBk5tA1SFqwiNgROBY4Agd/qUgGAKlQEXFD4CcO/lKZDACSJBXINQCSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFcgAIElSgQwAkiQVyAAgSVKBDACSJBXIACBJUoEMAJIkFej/A5+ChBeLAzbYAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
  );

export default HelpIcon;