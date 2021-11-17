<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" version="1.0"
     indent="yes" doctype-system="about:legacy-compact" />  
  <xsl:template match="/uczelnia">
    <html>
      <head>
        <title>Uczelnia</title>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <body>
        <h1>Uczelnia</h1>
        <xsl:for-each select="wydzial">
          <xsl:sort select="nazwaW"/>
          <table>
            <tr>
              <th class="faculty" colspan="3"><xsl:value-of select="nazwaW"/></th>
            </tr>
            <xsl:for-each select="kierunek">
              <xsl:sort select="nazwa"/>
              <tr>
                <th class="field" colspan="3"><xsl:value-of select="nazwa"/></th>
              </tr>
              <tr class="header">
                <th >Imie</th>
                <th>Nazwisko</th>
                <th>Numer Albumu</th>
              </tr>
              <xsl:for-each select="student">
                <xsl:sort select="nralbumu"/>
                <tr class="data">
                  <td><xsl:value-of select="imie"/></td>
                  <td><xsl:value-of select="nazwisko"/></td>
                  <td><xsl:value-of select="nralbumu"/></td>
                </tr>
              </xsl:for-each> 
            </xsl:for-each>
          </table>   
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
