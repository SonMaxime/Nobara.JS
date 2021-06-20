
# Common Errors

Il y a certaines erreures qui peuvent être causés en démarrant le bot, voici un petit de guide des erreures connues. Si vous avez toujours besoin d'aide, faites le moi savoir dans en déposant une issue dans ce répo.

### ffmpeg/avconv not found

Pour la catégorie musicale, ffmpeg est oblogatoire, pour fixer ce problème, essayer la commande `npm install ffmpeg-static`.

### Cannot find module <module_name>

Tout simple, installez le module en question par la commande `npm install <module_name>`.

### Erreur avec le module bookman

Il se peut que vous ayez cette erreur et c'est tout a fait normal. Cela est dû à l'installation d'un version trop récente du module qui n'est plus compatible à cause d'une implémentation de mongoose directement dans le module.

Faites donc attention à ce que le module soit dans la version 3.1.0 et non ultérieur.
