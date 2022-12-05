# contributors-cli
A simple CLI tool I made to add a table of contributors to a README.md ✍️

## Install "github-contributors" package

Install the **github-contributors** package from npm.

```
npm install --save github-contributors
```

**On Windows:**
You can alternatively run the **setup.bat** file.

## config.json Example

To use this tool you first have to update the config.json file.\
Here's an example using the [node-ytdl-core](https://github.com/fent/node-ytdl-core) repository by [fent](https://github.com/fent):
```json
{
    "user": "fent",
    "repository": "node-ytdl-core",
    "id": "CLIENT_ID",
    "secret": "CLIENT_SECRET",
    "file": true
}
```

File decides if a file of the table should be generated. If true, a file named table.txt generates in the folder of index.js

## Run this tool

```
node index.js
```

This will return the table generated for the defined repository in the console and if enabled also generate a table.txt file.

# Example table for node-tydl-core repository

<div align="center">
<table>
<tr>
</tr>
<tr>
<td align="center"><a href="https://github.com/fent"><img src="https://avatars.githubusercontent.com/u/933490?v=4?s=100" width="100px;" alt="fent"/><br /><sub><b>fent</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/TimeForANinja"><img src="https://avatars.githubusercontent.com/u/17046330?v=4?s=100" width="100px;" alt="TimeForANinja"/><br /><sub><b>TimeForANinja</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/FireController1847"><img src="https://avatars.githubusercontent.com/u/16494272?v=4?s=100" width="100px;" alt="FireController1847"/><br /><sub><b>FireController1847</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Aasim-A"><img src="https://avatars.githubusercontent.com/u/23695024?v=4?s=100" width="100px;" alt="Aasim-A"/><br /><sub><b>Aasim-A</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/raltamirano"><img src="https://avatars.githubusercontent.com/u/3392284?v=4?s=100" width="100px;" alt="raltamirano"/><br /><sub><b>raltamirano</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/HcgRandon"><img src="https://avatars.githubusercontent.com/u/6123135?v=4?s=100" width="100px;" alt="HcgRandon"/><br /><sub><b>HcgRandon</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/skick1234"><img src="https://avatars.githubusercontent.com/u/11555687?v=4?s=100" width="100px;" alt="skick1234"/><br /><sub><b>skick1234</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/WaqasIbrahim"><img src="https://avatars.githubusercontent.com/u/12554146?v=4?s=100" width="100px;" alt="WaqasIbrahim"/><br /><sub><b>WaqasIbrahim</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/andrewrk"><img src="https://avatars.githubusercontent.com/u/106511?v=4?s=100" width="100px;" alt="andrewrk"/><br /><sub><b>andrewrk</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Roki100"><img src="https://avatars.githubusercontent.com/u/35699619?v=4?s=100" width="100px;" alt="Roki100"/><br /><sub><b>Roki100</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/TinyMan"><img src="https://avatars.githubusercontent.com/u/5358221?v=4?s=100" width="100px;" alt="TinyMan"/><br /><sub><b>TinyMan</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/gatecrasher777"><img src="https://avatars.githubusercontent.com/u/8722680?v=4?s=100" width="100px;" alt="gatecrasher777"/><br /><sub><b>gatecrasher777</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/BrunoMoreira99"><img src="https://avatars.githubusercontent.com/u/16598818?v=4?s=100" width="100px;" alt="BrunoMoreira99"/><br /><sub><b>BrunoMoreira99</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/YinglunQ"><img src="https://avatars.githubusercontent.com/u/26083763?v=4?s=100" width="100px;" alt="YinglunQ"/><br /><sub><b>YinglunQ</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/Guichaguri"><img src="https://avatars.githubusercontent.com/u/1813032?v=4?s=100" width="100px;" alt="Guichaguri"/><br /><sub><b>Guichaguri</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/favna"><img src="https://avatars.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt="favna"/><br /><sub><b>favna</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/MatteZ02"><img src="https://avatars.githubusercontent.com/u/51192395?v=4?s=100" width="100px;" alt="MatteZ02"/><br /><sub><b>MatteZ02</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/mauriceoegerli"><img src="https://avatars.githubusercontent.com/u/15955392?v=4?s=100" width="100px;" alt="mauriceoegerli"/><br /><sub><b>mauriceoegerli</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/thepieterdc"><img src="https://avatars.githubusercontent.com/u/6131398?v=4?s=100" width="100px;" alt="thepieterdc"/><br /><sub><b>thepieterdc</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Rafer45"><img src="https://avatars.githubusercontent.com/u/12011689?v=4?s=100" width="100px;" alt="Rafer45"/><br /><sub><b>Rafer45</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/coderaiser"><img src="https://avatars.githubusercontent.com/u/1573141?v=4?s=100" width="100px;" alt="coderaiser"/><br /><sub><b>coderaiser</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/mtripg6666tdr"><img src="https://avatars.githubusercontent.com/u/56076195?v=4?s=100" width="100px;" alt="mtripg6666tdr"/><br /><sub><b>mtripg6666tdr</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/vladdrozd"><img src="https://avatars.githubusercontent.com/u/11088128?v=4?s=100" width="100px;" alt="vladdrozd"/><br /><sub><b>vladdrozd</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/coolaj86"><img src="https://avatars.githubusercontent.com/u/122831?v=4?s=100" width="100px;" alt="coolaj86"/><br /><sub><b>coolaj86</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/ashikmeerankutty"><img src="https://avatars.githubusercontent.com/u/10515204?v=4?s=100" width="100px;" alt="ashikmeerankutty"/><br /><sub><b>ashikmeerankutty</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/bubundas17"><img src="https://avatars.githubusercontent.com/u/26280146?v=4?s=100" width="100px;" alt="bubundas17"/><br /><sub><b>bubundas17</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/iCrawl"><img src="https://avatars.githubusercontent.com/u/20760160?v=4?s=100" width="100px;" alt="iCrawl"/><br /><sub><b>iCrawl</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/dcbartlett"><img src="https://avatars.githubusercontent.com/u/1077050?v=4?s=100" width="100px;" alt="dcbartlett"/><br /><sub><b>dcbartlett</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/digimezzo"><img src="https://avatars.githubusercontent.com/u/11945339?v=4?s=100" width="100px;" alt="digimezzo"/><br /><sub><b>digimezzo</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/gdoron"><img src="https://avatars.githubusercontent.com/u/6141009?v=4?s=100" width="100px;" alt="gdoron"/><br /><sub><b>gdoron</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/EdsonAlcala"><img src="https://avatars.githubusercontent.com/u/3077635?v=4?s=100" width="100px;" alt="EdsonAlcala"/><br /><sub><b>EdsonAlcala</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/MadLittleMods"><img src="https://avatars.githubusercontent.com/u/558581?v=4?s=100" width="100px;" alt="MadLittleMods"/><br /><sub><b>MadLittleMods</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/FD-"><img src="https://avatars.githubusercontent.com/u/3320822?v=4?s=100" width="100px;" alt="FD-"/><br /><sub><b>FD-</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/promise"><img src="https://avatars.githubusercontent.com/u/10573728?v=4?s=100" width="100px;" alt="promise"/><br /><sub><b>promise</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/AFRUITPIE"><img src="https://avatars.githubusercontent.com/u/20470485?v=4?s=100" width="100px;" alt="AFRUITPIE"/><br /><sub><b>AFRUITPIE</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/liuhenry"><img src="https://avatars.githubusercontent.com/u/293681?v=4?s=100" width="100px;" alt="liuhenry"/><br /><sub><b>liuhenry</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Histmy"><img src="https://avatars.githubusercontent.com/u/59661489?v=4?s=100" width="100px;" alt="Histmy"/><br /><sub><b>Histmy</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/kelyvin"><img src="https://avatars.githubusercontent.com/u/1530102?v=4?s=100" width="100px;" alt="kelyvin"/><br /><sub><b>kelyvin</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/kuu"><img src="https://avatars.githubusercontent.com/u/1708551?v=4?s=100" width="100px;" alt="kuu"/><br /><sub><b>kuu</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/leonbrandt"><img src="https://avatars.githubusercontent.com/u/13922011?v=4?s=100" width="100px;" alt="leonbrandt"/><br /><sub><b>leonbrandt</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/LiamTownsley"><img src="https://avatars.githubusercontent.com/u/25304583?v=4?s=100" width="100px;" alt="LiamTownsley"/><br /><sub><b>LiamTownsley</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Marjoe"><img src="https://avatars.githubusercontent.com/u/1425437?v=4?s=100" width="100px;" alt="Marjoe"/><br /><sub><b>Marjoe</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/maxogden"><img src="https://avatars.githubusercontent.com/u/39759?v=4?s=100" width="100px;" alt="maxogden"/><br /><sub><b>maxogden</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/edef1c"><img src="https://avatars.githubusercontent.com/u/50854?v=4?s=100" width="100px;" alt="edef1c"/><br /><sub><b>edef1c</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/D3SOX"><img src="https://avatars.githubusercontent.com/u/24937357?v=4?s=100" width="100px;" alt="D3SOX"/><br /><sub><b>D3SOX</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/PrestonN"><img src="https://avatars.githubusercontent.com/u/9736046?v=4?s=100" width="100px;" alt="PrestonN"/><br /><sub><b>PrestonN</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/LevitatingBusinessMan"><img src="https://avatars.githubusercontent.com/u/27690034?v=4?s=100" width="100px;" alt="LevitatingBusinessMan"/><br /><sub><b>LevitatingBusinessMan</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/rubs019"><img src="https://avatars.githubusercontent.com/u/15689474?v=4?s=100" width="100px;" alt="rubs019"/><br /><sub><b>rubs019</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Sank6"><img src="https://avatars.githubusercontent.com/u/25014241?v=4?s=100" width="100px;" alt="Sank6"/><br /><sub><b>Sank6</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/shanethmoore"><img src="https://avatars.githubusercontent.com/u/3028279?v=4?s=100" width="100px;" alt="shanethmoore"/><br /><sub><b>shanethmoore</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/sesam"><img src="https://avatars.githubusercontent.com/u/8921?v=4?s=100" width="100px;" alt="sesam"/><br /><sub><b>sesam</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/skybldev"><img src="https://avatars.githubusercontent.com/u/30189017?v=4?s=100" width="100px;" alt="skybldev"/><br /><sub><b>skybldev</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/snyk-bot"><img src="https://avatars.githubusercontent.com/u/19733683?v=4?s=100" width="100px;" alt="snyk-bot"/><br /><sub><b>snyk-bot</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Svallinn"><img src="https://avatars.githubusercontent.com/u/41585298?v=4?s=100" width="100px;" alt="Svallinn"/><br /><sub><b>Svallinn</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Thewsomeguy"><img src="https://avatars.githubusercontent.com/u/3941635?v=4?s=100" width="100px;" alt="Thewsomeguy"/><br /><sub><b>Thewsomeguy</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Thiti-Dev"><img src="https://avatars.githubusercontent.com/u/36455825?v=4?s=100" width="100px;" alt="Thiti-Dev"/><br /><sub><b>Thiti-Dev</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/DasWolke"><img src="https://avatars.githubusercontent.com/u/3892286?v=4?s=100" width="100px;" alt="DasWolke"/><br /><sub><b>DasWolke</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/zhuyifan2013"><img src="https://avatars.githubusercontent.com/u/3753079?v=4?s=100" width="100px;" alt="zhuyifan2013"/><br /><sub><b>zhuyifan2013</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/d4rckh"><img src="https://avatars.githubusercontent.com/u/35298550?v=4?s=100" width="100px;" alt="d4rckh"/><br /><sub><b>d4rckh</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/cherryblossom000"><img src="https://avatars.githubusercontent.com/u/31467609?v=4?s=100" width="100px;" alt="cherryblossom000"/><br /><sub><b>cherryblossom000</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/dgivoli"><img src="https://avatars.githubusercontent.com/u/15192038?v=4?s=100" width="100px;" alt="dgivoli"/><br /><sub><b>dgivoli</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/Hazmi35"><img src="https://avatars.githubusercontent.com/u/32807631?v=4?s=100" width="100px;" alt="Hazmi35"/><br /><sub><b>Hazmi35</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/jackik1410"><img src="https://avatars.githubusercontent.com/u/20612310?v=4?s=100" width="100px;" alt="jackik1410"/><br /><sub><b>jackik1410</b></sub></a><br /></td>
</tr>
<tr>
<td align="center"><a href="https://github.com/luiseok"><img src="https://avatars.githubusercontent.com/u/3125044?v=4?s=100" width="100px;" alt="luiseok"/><br /><sub><b>luiseok</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/redbrain"><img src="https://avatars.githubusercontent.com/u/42494361?v=4?s=100" width="100px;" alt="redbrain"/><br /><sub><b>redbrain</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/simonlary"><img src="https://avatars.githubusercontent.com/u/21071958?v=4?s=100" width="100px;" alt="simonlary"/><br /><sub><b>simonlary</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/sub2u"><img src="https://avatars.githubusercontent.com/u/649072?v=4?s=100" width="100px;" alt="sub2u"/><br /><sub><b>sub2u</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/vaaski"><img src="https://avatars.githubusercontent.com/u/17879327?v=4?s=100" width="100px;" alt="vaaski"/><br /><sub><b>vaaski</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/mome0320"><img src="https://avatars.githubusercontent.com/u/18746638?v=4?s=100" width="100px;" alt="mome0320"/><br /><sub><b>mome0320</b></sub></a><br /></td>
</tr>
</table>
</div>

## Author

Authored and maintained by schnappi.

> GitHub [@schnappi21](https://github.com/schnappi21)
