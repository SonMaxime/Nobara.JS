
# Erreures communes

Il y a certaines erreures qui peuvent être causés en démarrant le bot ou bien pendant son fonctionnement, voici un petit de guide des erreures connues. Si vous avez toujours besoin d'aide, faites le moi savoir dans en déposant une issue dans ce répo.

### ffmpeg/avconv not found

Pour la catégorie musicale, ffmpeg est oblogatoire, pour fixer ce problème, essayer la commande `npm install ffmpeg-static`.

### Cannot find module <module_name>

Tout simple, installez le module en question par la commande `npm install <module_name>`.

### Erreur avec le module bookman

Il se peut que vous ayez cette erreur et c'est tout a fait normal. Cela est dû à l'installation d'un version trop récente du module qui n'est plus compatible à cause d'une implémentation de mongoose directement dans le module.

Faites donc attention à ce que le module soit dans la version 3.1.0 et non ultérieur.

### Cannot read experience error

Cette erreure est due à plusieurs problèmes :
- La connection de votre bot à votre base de données Mongo ne s'est pas effectué correctement.
- Votre bot à été éteint puis un utilisateur Discord a rejoint votre serveur, ce qui fait que l'utilisateur en question n'a pas été enregistré sur votre de base de données et lors de l'intervention du module d'XP, ce dernier n'a pas pu trouver le profil du membre concerné de votre serveur.

Pour y remédier :
- Vérifiez les droits que vous avez accordé à votre nom d'utilisateur de votre base de données Mongo
- Vérifiez le lien que vous avez placé dans votre fichier `config.js`
- Réalisez une sauvegarde de votre base de données et réalisez-en une nouvelle sous le même nom puis réstaurez la sauvegarde de votre ancienne base.
- Trouvez un moyen de laisser votre bot en route de manière permanante selon vos possibilités.