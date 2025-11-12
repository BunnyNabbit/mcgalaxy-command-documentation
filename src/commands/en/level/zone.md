---
title: "/Zone"
summary: "Defines or manages zones of the level the user is in."
---

# /Zone

Defines or manages zones of the level the user is in.

For the syntax used in the `permissions` arguments, see [Topic: permissions](../../topics/permissions/)

## `/Zone add [zone name]`

## `/Zone del [zone name]`

Deletes the zone.

## `/Zone perbuild [zone name] [permissions]`

When modifying existing zones, the command can fail if the zone's build permission does not allow the user to edit within the zone.  
If the user is allow listed by name, the user is able to change the minimum required rank to a rank equal or lower their rank.
