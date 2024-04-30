import csv

# 获取输入的k条数据
orn = """Yi-Cheng Chan and Dai-Jiong Lin, “The Design of an AP-Based Handoff Scheme for IEEE 802.11 WLANs,” International Journal of e-Education, e-Business, e-Management and e-Learning, Vol. 4, No. 1, pp. 72-76, February 2014. [EI]
Yi-Cheng Chan and Ya-Yi Hu, “Adaptive Network Coding Scheme for TCP over Wireless Sensor Networks,” International Journal of Computers, Communications & Control, Vol. 8, Issue 6, pp. 800-811, December 2013. [SCI-Expanded]
Yi-Cheng Chan, Chia-Liang Lin, Chia-Tai Chan, and Cheng-Yuan Ho, “CODE TCP: A Competitive Delay-Based TCP,” Computer Communications, Vol. 33, Issue 9, pp. 1013-1029, June 2010. [SCI-Expanded, EI]
Yi-Cheng Chan and Ming-Chun Liao, “Collision-Aware Backoff Mechanisms for IEEE 802.11 WLANs,” Journal of Convergence Information Technology, Vol. 5, No. 2, pp. 88-100, April 2010. [EI]
Cheng-Yuan Ho, Yaw-Chung Chen, Yi-Cheng Chan, and Cheng-Yun Ho, “Fast Retransmit and Fast Recovery Schemes of Transport Protocols: A Survey and Taxonomy,” Computer Networks, Vol. 52, Issue 6, pp. 1308-1327, April 2008. [SCI-Expanded, EI]
Yi-Cheng Chan, Chia-Liang Lin, and Cheng-Yuan Ho, “Quick Vegas: Improving Performance of TCP Vegas for High Bandwidth-Delay Product Networks,” IEICE Transactions on Communications, Vol. E91-B, No. 4, pp. 987-997, April 2008. [SCI, EI]
Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “WARD: A Transmission Control Protocol-Friendly Stateless Active Queue Management Scheme,” IET Communications, Vol. 1, Issue 6, pp. 1179-1186, Dec. 2007. [SCI, EI]
Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “WARD: A Deterministic Fluid Model,” IET Communications, Vol. 1, Issue 4, pp. 711-717, August 2007. [SCI, EI]
Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “TCP-Ho: A Congestion Control Algorithm with Design and Performance Evaluation,” IEICE Transactions on Communications, Vol. E90-B, No. 3, pp. 516-526, March 2007. [SCI, EI]
Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “Gallop-Vegas: An Enhanced Slow-Start Mechanism for TCP Vegas,” Journal of Communications and Networks, Vol. 8, No. 3, pp. 351-359, Sept. 2006. [SCI]
Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “RoVegas: A router-based congestion avoidance mechanism for TCP Vegas,” Computer Communications, Vol. 27, Issue 16, pp. 1624-1636, October 2004. [SCI-Expanded, EI]
Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “RedVegas: Performance Improvement of TCP Vegas over Heterogeneous Networks,” IEICE Trans. Fundamentals, Vol. E87-A, No. 7, pp. 1672-1680, July 2004. [SCI-Expanded, EI]
Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “Design and Performance Evaluation of an Improved TCP Congestion Avoidance Scheme,” IEE Proceedings – Communications, Vol. 151, No. 1, pp. 107-111, Feb. 2004. [SCI, EI]
Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “An Enhanced Congestion Avoidance Mechanism for TCP Vegas,” IEEE Communications Letters, Vol. 7, Issue 7, pp. 343-345, July 2003. [SCI, EI]"""
data = []
k = orn.split('\n')
#print(k)
for i in k:
    data.append(i)

# 将数据按照逗号分割并存储到大列表中
processed_data = []
for item in data:
    processed_data.append(item.split(','))

# 将大列表写入CSV文件
csv_file = 'processed_data.csv'
with open(csv_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    for item in data:
        writer.writerow([item])

print(f"数据已保存到 {csv_file} 文件中。")
