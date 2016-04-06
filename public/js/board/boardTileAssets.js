var gameAssets={Tree:'data:image/png;base64,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',Adventurer:'/img/red_knight.gif',BlackKnight:'/img/blue_knight.gif',DiamondMine:'data:image/png;base64,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',HealthWell:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAlCAYAAAAnQjt6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAdVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgLYgAUAAAzaSURBVFgJrVgLcFzVef7PvXv37vutXWklrVbSIku2kIyFHzKWsY3BEGIeGZRpYJzSUrdNSwNpoEmYhqhNw4RpmpCmU7fQTFPMFBzXgeBQG5zYAiwcDJZlWej9WFnSSrsr7fPu8+7e0/+sWMWQPuyZ/jP/nnPPPec/3/+f/3HuAlw7cb+ZKvw+zwkxAioKwPfheNPH7wi2jK+bVNexQsG5Vk+1eMu+VnpvUyMv1qzTQ1rhPOf7Uw//8+HUKz4fjE1OQu46ZK5NvR4guEjVxlP6nQY3bdvTQRVfh6hEcnz19EzmSQCuwswp38BJDAizClrr2uk6gYhaSsHKqYqQk2WyvLBMw2k1SccpyhGtEZnjAVLXvvtVM68VyMcacqlEOJnwL2nBPOkDYUbNBcMpGL40jSL5mLyil6+SfV3dawGy5nwCJNOJAtC3htbBoNQCWlFPc/EomZ2V8GRCsspmS0MiwQBc99GgKa+JNBaADek9ux503fWZzq799xhad+0A3aZ1RPJ5IGmoh2jYpqSyyaySDocAehBZ7/+Lj5StwFoWLQ6U+jWorH3A3NnFb9u6ibbVuEhQyUK/PwgKcSoTy5rN3EigTgiDVu7+6Hk4WlKQhTwD9H+Cuio3lBayjctmZYsZCDA0NubzAB6bzS6YbTaS0KppUMnDfCwBASkDvMcCG3ZWE63L4EInMcPRo0W2DomtL4MoK1d68emfT/sIW8TGKpGtyExgWpqacmgARml4uTG/uGhfqbULOqEI/nAc/MtR4NAmGnUszZEc89oUiOZGyMWZkiIyAxNAjiOXlcTuJ6kMpGwJZeN9uwwDr/U+jtP2IseQmbAw7/H8KHrm3TcMUuRvXfWuxhZfAzVpDZCVM2Tol78iYyd/+QutTvtdnLsbQRzGtoAsICtg0P4ApMx/YJ8RA1iydOnp4x8GpIySWcOVnVl56CvPPvOQqa620p+MgqLRgByPp6PTE6ff/P7z4eJFI6fLFsEh6ECjNULaboXFeB6kd/p4541g3/7XT2231Hk684UC2HkB7JwA0/0Xs4ef+1Hcd9dd70yeOPHfJjwGhCEs/mFPj+75np4/bd+18/FbP3ef0VhXq9giQZITBFpIxMULR1NP4TyF826yZVU6kItFYlGJUKe1QIWzAZW4aR/R0m2eTRtN3q2baV4p0hq1lni1RjpQ4djz/nvnXOMnTnwFZZxCZvQJy7DwZZaovtDb+9iX/+rpR/b97gGHEc0eTknc+OAgCYyOkVQ0wcW1Fn3Gu8Ewd+Q833Sbj9qbPMQsGiCfiMPpX5yAiaWw2PBHB0xmk15MBQIkND1DRLVIjC4nONxVpKmhwQnZrHdiZDQO3d3jMDzMjqfsEsC33XGH06JSHbjjwIPfuPPhA/bq5vXKTDLC9Z7ry7313D/On/rO9xb8s4tJfkObYHW71BX6IDH63ETnrQO9Xgs0JYEyPUqsTZWQbm4pjl68vPzrP3507txPXw3nHBbKVVboqt1u8Hq9IJqMdVI0us40Hxj1uN0Li4uLiGXVX/hQKPzyI197ct+dD/1Opb7RC34pSgb6zsHJn7w0Mf3aG09b3e7vrgx/9G5gcLLJ53XV7/z8PVDf1goqUQ1ROQc2QQ2fbb+Z3mAwk58fPZIZ+/sfvuCDiicyau7VibERRcXzWwxVLpXGaYe6Wg/xNTY6IivhjaePv5Hr2L9/dHF8nJUFoqLJxH5DjQvM9R4akJLknff6sr0/fnHGf+z4P+CEV6KBALTvbm5xeZs11U11oLhrIKLRQTaRgoV8DhSTFTa4vVDfTuDr2ztJ39Ss8c2zZ/JSHiarAtKhM8/8nSurVt192/332rpa27mK5iaV1uG4CWXvUBUK5Ugq5QzqlxJgiYTAP3AZ3v7hoXn/m6e/hRNXcyPAnwiVLd/s+IODFTpPvXJhNsTNSgHQ8Ryk5ALkzGmI0gK5r6IKug98UbTY7AcPDVxoBSnxZTT8QGVX11+c63k2pk9lvmQ4qBU5joOglGD5KRnDQMC2RKXwnU9kQLUUpVPDEzDz5ulknaPl7OzyCAgiPCrktj0uObsqLwsOuFnK0oen/GAMRUDWiqDkZFAZNaBJx0GhHExU13Lm23eS77/4wi1v/eSlvzn5+vFnlt599z3cafCDE7+izr37QGMxQTiTZ0FiKMpB5qwlUmEMTc0uLJuksStWKUdVzl236hLhiUZ+GTqEuh3fFDvvcRaqbyjOTS9z9xWWyY6pCbDFYlAQRQw3CpxkBF6h4MeccUrJEWdNnXLjbXtgKR6/++REP4WRhcfMdbVu840buanACsBitBAOx1iWnY9f0a4lNt5Q3XAycOp8dm45uMm6vkVTs3WLOp9ZXp8f5PY69n6hMdjVym31aMhXZ0bJrYMDYKYKcEwPvAPxVVXAu7AaCAJWugK4pDRMRyRyEvsWXw1Z37LO8eFPf95h/uLvddbu3OmaGR4j44d+PJi8PP5kW7P+xZmhj7IoqXQ8fN5gct7+wC1t7e3NWy21Xk2a6MTUfN4b8rVXmzo3wkYrB5+RrpC9E0NQg45btFpXrcHz6KgmoAY9KBhBYlEBUzINMtae2UyepM12RaO3aLfc1NborKxxZowW0qCm0FKpXbLYNGf7ewf83d3d+eHh4VUgIMWHt3/p4I6N999rVJJZcvbVAdS4BoQtLeBu1JHuK8Nk15Ej4NJqQeXxgoIAGBG8M5YuQViXiU6HFQlLEiHgUnPQmJbhg1+HSAg3v3/fLaBFXzrTewl23LVdqWlvrfIPjd4/13+JEqfz/bDfj4Udwxd/Xk7FYp3ByenNK5OLkEoVKN/lhLsthGybHoYtl86DFxOP2NwMil4HKjQ7MBBICgORTgOJYk3KZLBQFECgRajKEeiOCxDVNoDDZgG/0USlyQgsjc1wek0hX5TzLM2/j7dbVhhLxIA8dv6llx748NXXny2ma+sNXVtprkHDNSbQW392DKpnpkHcvBk41FhJZ6BQLGKEUFSelKxCEACdmyvlag7HinhEBK3XUVUBGVMRJjHX4HUNzLJEX/7WD4rVttx/ZmOxP8ehGX9vL6s3zOPY7RtgYXDyJDaIrv9RS3vVbgNdD1kUGkMNDbgJRae0IZCcSgWTwSDEcXMN9k04R8OAoWUMRiNYnU5Q2ewIUAE+uAgkmQAV4ShP84RPTkQLE+cPzwL8C+6FTYmYaUvmZUDYoUs9lL7+PUI251PBXWJRhiwv0KjeQNisyPg45JgF1GrIzc9DPhwuRYoGx1QIhGKSyjkcIOVywOMYn82CJhyBzOYoxPNZkAppKGSD7Fb9GvIQMrME47XwZUBKDz27d+vQ3USB8FBEYWo0mIBHgJEP4wUZ5kdHoKHWA41NTaDZsAFkvG9w+J5HEAQZ/QzCwyOQGx4GI1qlCu9EuWQM/MjjWBhzhdIRGFAcozUAq4+r18LVfjLJLGMpZFV8aoXghaoAiViyZDcV5UGIJ4FowlDEkBXsdtDjUVAETBEMY+Y7utoa0OCxqFeikL0yCvFIBCSe0JyoJkUVb0T5ZSDl/dfako+UniQJ8yMsy6F0OjUS1S0oBepQLKQOQ7MO07eD5YqVZQih5nJrK9ixtDNLUAWdE1sRfajC4ylZKW93wLJRD0ERL1XZHKikFNBiEc8Tkms7f6qzmhTY4IqXCrA4KfOmiCYaa0vpTIair12pNTnBOdJHmMayaAR1XgYOU2sej0tCjQuyDGq9vsQcapJ/+zysVFnB/5dPKCPrbuAufdBPLp15+2xmYa4nvhhmdYdl09+iMhD0iEUFwyYKJDAkTA+ZgxXudZLbp6/WmMAoGkgB7x4kGcabdAGK8QQkl5YgEQpBIRoBDR4Th5pn8Ssv3IJ3mn17YOTmDuiLRJWTh14Ymj7ys2cRBHNUTDYlJy1FytVoykDKYwTx5nRmzwe5yFxWkOKd4ap6UW5sL1YWZGKeuUSYOimsMxn0C0xlJYtwoSWQp6YgHl6E+W8/rQx3bYcPP+wnp/71cH94YPCrHV948NTihQtsc1R4NVzLG5Zb9uJqKj9TPd7o8eHPpDsPPuyrb6v+XEaCmniEZglPoEoAvkIAil1BVsCIx+Zx2cHuraVjNU5yNBhUjv3bv5/TvnLsuTSlxzD5MRCfCNerN2X98safHl9d1LFfp7pw/AnrxtufrNr2WYPWXqsoeZlT16lA69EAj0CyCAT/ooDPb7gBNtfXKhfP9HJPf/2py7HBj9i30WlkJosB+a3jwLE1+k3UrA2VOquLLhxPqzEThqcuSuGqhkcgEloP6KyAH3FkSQ06dNpUAVNCoUDdkSUSn3DkA5eG3kIQ/4TfMH34DcOE/a8APrnt//xU8iGz50arlodXtCiUMdZaigmBHV+pxb6CSYJiQowbjZpHrhLHrHFN9F8Q5pllIp2YIgAAAABJRU5ErkJggg==',Bones:'data:image/png;base64,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'}
