text = """
Alabama	21	10	3	16	50	 	Alabama	34	11	7	6	58
Alaska	3	10	3	12	28	 	Alaska	9	3	2	4	18
Amer. Samoa	 	6	3	 	9	 	Amer. Samoa	 	6	 	4	10
Arizona	27	10	3	18	58	 	Arizona	41	14	8	12	75
Arkansas	12	10	3	15	40	 	Arkansas	21	7	4	5	37
California	159	10	3	 	172	 	California	264	88	53	71	476
Colorado	21	10	3	3	37	 	Colorado	42	14	8	13	77
Connecticut	15	10	3	 	28	 	Connecticut	33	11	7	14	65
Delaware	3	10	3	 	16	 	Delaware	11	4	2	10	27
DC	 	16	3	 	19	 	DC	11	4	2	20	37
Florida	81	10	3	5	99	 	Florida	135	45	27	31	238
Georgia	42	10	3	21	76	 	Georgia	64	21	13	14	112
Guam	 	6	3	 	9	 	Guam	 	6	 	5	11
Hawaii	6	10	3	 	19	 	Hawaii	14	5	3	9	31
Idaho	6	10	3	13	32	 	Idaho	13	4	3	4	24
Illinois	54	10	3	2	69	 	Illinois	104	35	21	30	190
Indiana	27	10	3	17	57	 	Indiana	46	15	9	9	79
Iowa	12	10	3	5	30	 	Iowa	30	10	6	8	54
Kansas	12	10	3	15	40	 	Kansas	22	7	4	4	37
Kentucky	18	10	3	14	45	 	Kentucky	31	10	6	6	53
Louisiana	18	10	3	15	46	 	Louisiana	35	12	7	7	61
Maine	6	10	3	4	23	 	Maine	17	5	3	5	30
Maryland	24	10	3	1	38	 	Maryland	51	17	10	27	105
Massachusetts	27	10	3	2	42	 	Massachusetts	62	21	12	26	121
Michigan	42	10	3	4	59	 	Michigan	87	29	17	19	152
Minnesota	24	10	3	1	38	 	Minnesota	51	17	10	16	94
Mississippi	12	10	3	14	39	 	Mississippi	23	8	5	5	41
Missouri	24	10	3	15	52	 	Missouri	49	16	10	13	88
Montana	3	10	3	11	27	 	Montana	10	3	2	7	22
Nebraska	9	10	3	14	36	 	Nebraska	17	6	3	5	31
Nevada	12	10	3	5	30	 	Nevada	20	7	4	8	39
New Hampshire	6	10	3	4	23	 	New Hampshire	16	5	3	8	32
New Jersey	36	10	3	2	51	 	New Jersey	72	24	14	16	126
New Mexico	9	10	3	2	24	 	New Mexico	19	6	4	9	38
New York	81	10	3	1	95	 	New York	152	51	30	44	277
North Carolina	39	10	3	20	72	 	North Carolina	70	23	14	13	120
North Dakota	3	10	3	12	28	 	North Dakota	9	3	2	5	19
N. Marianas	 	6	3	 	9	 	N. Marianas	 	6	 	5	11
Ohio	48	10	3	5	66	 	Ohio	97	32	19	17	165
Oklahoma	15	10	3	15	43	 	Oklahoma	25	8	5	4	42
Oregon	15	10	3	 	28	 	Oregon	34	11	7	12	64
Pennsylvania	54	10	3	4	71	 	Pennsylvania	104	35	21	21	181
Puerto Rico	 	20	3	 	23	 	Puerto Rico	33	11	7	7	58
Rhode Island	6	10	3	 	19	 	Rhode Island	14	5	3	9	31
South Carolina	21	10	3	16	50	 	South Carolina	33	11	7	6	57
South Dakota	3	10	3	13	29	 	South Dakota	10	3	2	5	20
Tennessee	27	10	3	18	58	 	Tennessee	44	15	9	9	77
Texas	108	10	3	34	155	 	Texas	136	45	27	29	237
Utah	12	10	3	15	40	 	Utah	16	5	3	4	28
Vermont	3	10	3	 	16	 	Vermont	10	3	2	8	23
Virgin Islands	 	6	3	 	9	 	Virgin Islands	 	6	 	5	11
Virginia	33	10	3	3	49	 	Virginia	62	21	12	17	112
Washington	30	10	3	1	44	 	Washington	56	19	11	16	102
West Virginia	9	10	3	12	34	 	West Virginia	17	6	3	9	35
Wisconsin	24	10	3	5	42	 	Wisconsin	52	17	10	10	89
Wyoming	3	10	3	13	29	 	Wyoming	8	3	2	4	17
"""
l = text.split("\t")


l2 = []
i = 0
while(i<len(l)):
    if (i%6==0):
        l2.append(l[i])
    i+=1

i=0
while(i<len(l2)):
    if(l2[i]==' '):
        l2.remove(' ')
    else:
        i+=1

backToString = "".join(l2)

print backToString



