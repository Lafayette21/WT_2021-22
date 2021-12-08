#!/usr/bin/python3

file = open('records.txt', 'r')
lines = file.readlines()

print ("Content-Type: application/html")
print ()
print ("""
<style>
#wynik{
  border: 1px solid black;
}
td{
  border: 1px solid black;
  padding: 5px;
}
</style>

<table id="wynik" >
  <tr>
    <th> Autor </th>
    <th> Tytul </th>
  </tr>
""")
for l in lines:
  print ("  <tr>")
  print ("    <td>" + l.split(",")[0] + "</td>" )
  print ("    <td>" + l.split(",")[1] + "</td>" )
  print ("  </tr>")
print ("</table>")
