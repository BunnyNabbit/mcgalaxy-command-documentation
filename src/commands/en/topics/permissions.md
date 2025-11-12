---
title: "Permissions"
summary: "How permissions are defined and enforced."
---

# Permissions

Permissions are used to allow or disallow a range or ranks and a set of players. These are used for the following commands:

- `/PerVisit`
- `/Zone perbuild`

A user can change permissions if all of these conditions are true:

- They are allowed by rank or name.
- They are allowed to use the command.
- The new set of permissions does not block them.

## Syntax

The name of a player or rank is used. Without a prepending `+` or `-` character, a rank name is assumed. Otherwise, a user's name will be used.

### Rank

Sets the rank. Cannot be set where the user would be blocked with the new permissions. Typically used as the minimum required rank, but this usage can differ from commands.

- `/PerBuild level-name Admin`

### Allow user

Adds the user to the allow list. If the user was block listed, this will only remove them from the block list. A user being on the allow list will allow them to perform most actions despite their rank. A user can put themselves in the allow list.

- `/PerBuild level-name +Username`

### Block user

Adds the user to the block list. If the user was allow listed, this will only remove them from the allow list. A user cannot put themselves or other users who have a higher rank in the block list.

- `/PerBuild level-name -Username`
