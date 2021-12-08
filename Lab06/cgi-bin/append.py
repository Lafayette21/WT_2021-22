#!/usr/bin/python3
import cgi
import cgitb; cgitb.enable()
print ("Content-Type: aplication/html")
print ()
form = cgi.FieldStorage()

autor = form.getvalue("autor", "(no data)")
tytul = form.getvalue("tytul", "(no data)")

file = open('records.txt', 'a' )
file.write(autor + "," + tytul + "\n")
file.close()
