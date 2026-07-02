/**
 * 电子物证理论考试题库
 * 数据来源：网络公开题库 + 电子物证专业知识整理
 */

const questionBank = {
  single: [
    {
      id: 1,
      question: "安卓手机的软件安装包格式为（）",
      options: ["A. msi", "B. exe", "C. apk", "D. ipa"],
      answer: "C",
      explanation: "APK（Android Package Kit）是Android系统的应用程序包文件格式，用于分发和安装移动应用。msi是Windows安装包格式，exe是可执行文件，ipa是iOS安装包格式。"
    },
    {
      id: 2,
      question: "电子证据、数字证据、计算机证据三者之间的关系是（）",
      options: ["A. 电子证据包含数字证据，数字证据包含计算机证据", "B. 电子证据包含计算机证据，计算机证据包含数字证据", "C. 计算机证据包含电子证据，电子证据包含数字证据", "D. 数字证据包含电子证据，计算机证据包含电子证据"],
      answer: "A",
      explanation: "电子证据范围最广，包括所有以电子形式存在的证据；数字证据是电子证据的子集，以数字形式存储和传输；计算机证据是数字证据的子集，特指与计算机系统相关的证据。"
    },
    {
      id: 3,
      question: "在Windows操作系统中，用于打开注册表编辑器的命令是（）",
      options: ["A. msconfig", "B. open", "C. regedit", "D. read"],
      answer: "C",
      explanation: "regedit是Windows系统内置的注册表编辑器命令，用于查看和修改系统注册表。msconfig用于系统配置，open和read不是标准Windows命令。"
    },
    {
      id: 4,
      question: "关于日志分析，以下说法错误的是（）",
      options: ["A. 删除但未被覆盖的日志可以进行日志恢复", "B. 可以通过关键词搜索查找被删除的日志", "C. 日志分析无法定位攻击者的操作", "D. 日志分析可以查看入侵者访问网页木马的相关信息"],
      answer: "C",
      explanation: "日志分析是电子物证检验的重要手段，通过分析系统日志、应用程序日志、安全日志等，可以追踪攻击者的操作行为、访问路径、时间线等关键信息。"
    },
    {
      id: 5,
      question: "在Windows操作系统中，如何在命令行里面查看IP详细信息（）",
      options: ["A. ipconfig", "B. ifconfig", "C. ipconfig /all", "D. ifconfig /all"],
      answer: "C",
      explanation: "ipconfig /all命令可以显示Windows系统中所有网络适配器的完整TCP/IP配置信息，包括IP地址、子网掩码、默认网关、MAC地址、DNS服务器等。ifconfig是Linux/Unix系统的命令。"
    },
    {
      id: 6,
      question: "Windows系统中拥有最高权限的用户是（）",
      options: ["A. administrator", "B. admin", "C. system", "D. root"],
      answer: "A",
      explanation: "Administrator（管理员）是Windows系统中拥有最高权限的本地用户账户。System是系统内核账户，root是Linux/Unix系统的超级用户。"
    },
    {
      id: 7,
      question: "IP地址 172.16.128.19 属于（）",
      options: ["A. Internet公网地址", "B. 环回地址", "C. MAC地址", "D. 私有地址"],
      answer: "D",
      explanation: "172.16.0.0 ~ 172.31.255.255 是RFC1918定义的私有IP地址范围（B类），仅在局域网内部使用，不能在公网中直接路由。"
    },
    {
      id: 8,
      question: "电子邮箱具有指向特定人的特点，这属于电子邮箱的（）",
      options: ["A. 网络特征", "B. 标识特征", "C. 唯一特征", "D. 准确特征"],
      answer: "A",
      explanation: "电子邮箱具有网络特征，因为它依托网络存在，具有指向特定人的网络身份标识功能。在电子物证中，邮箱可用于追踪用户身份和网络行为。"
    },
    {
      id: 9,
      question: "如果嫌疑人将多个JPEG图片文件的扩展名改为其他名称，需要通过（）可以快速找到这些文件？",
      options: ["A. 散列值比对（MD5）", "B. 散列值比对（SHA-1）", "C. 文件签名分析", "D. 以上答案均不正确"],
      answer: "C",
      explanation: "文件签名（File Signature）是文件头中的特定字节序列，用于标识文件类型。JPEG文件以FF D8开头，通过文件签名分析可以快速识别被改扩展名的文件。散列值比对只能验证文件是否一致，无法识别文件类型。"
    },
    {
      id: 10,
      question: "关于哈希值（散列值）的特性，以下说法正确的是（）",
      options: ["A. 相同文件可能有不同的哈希值", "B. 文件被修改后哈希值保持不变", "C. 哈希值可用于验证电子数据的完整性和同一性", "D. 哈希值可以逆向还原出原始文件内容"],
      answer: "C",
      explanation: "哈希值是电子数据的'电子指纹'，具有以下特性：相同文件产生相同哈希值；文件被修改后哈希值必然改变；哈希函数是单向的，无法逆向还原原始内容。因此哈希值广泛用于验证数据完整性和同一性。"
    },
    {
      id: 11,
      question: "电子物证检验时，原始检材应通过（）连接以确保证据完整性？",
      options: ["A. 读写接口", "B. 只读设备", "C. 无线连接", "D. 网络共享"],
      answer: "B",
      explanation: "只读设备（Write Blocker）可以阻止外部对存储介质的写操作，确保原始检材在取证过程中不被修改，是电子数据取证的标准做法。"
    },
    {
      id: 12,
      question: "以下哪种硬盘镜像格式是由EnCase工具创建的？",
      options: ["A. DD", "B. E01", "C. AFF", "D. VMDK"],
      answer: "B",
      explanation: "E01（Expert Witness Format）是EnCase取证软件创建的镜像格式，支持压缩和完整性校验。DD是Linux dd命令创建的原始镜像，AFF是高级取证格式，VMDK是VMware虚拟机磁盘格式。"
    },
    {
      id: 13,
      question: "以下不属于电子数据取证原则的是（）",
      options: ["A. 合法性原则", "B. 及时性原则", "C. 可修改原则", "D. 完整性原则"],
      answer: "C",
      explanation: "电子数据取证的核心原则包括：合法性原则（依法取证）、及时性原则（快速响应）、完整性原则（不破坏原始数据）、原始性原则（优先使用原始证据）。任何情况下都不允许修改原始检材。"
    },
    {
      id: 14,
      question: "FAT32文件系统支持的单个文件最大大小约为（）",
      options: ["A. 2GB", "B. 4GB", "C. 8GB", "D. 16GB"],
      answer: "B",
      explanation: "FAT32文件系统使用32位簇号，但由于设计限制，单个文件最大只能支持约4GB（实际为4GB减1字节）。exFAT和NTFS文件系统支持更大的文件。"
    },
    {
      id: 15,
      question: "NTFS文件系统中，用于记录文件系统操作日志的是（）",
      options: ["A. $MFT", "B. $LogFile", "C. $Bitmap", "D. $Boot"],
      answer: "B",
      explanation: "$LogFile是NTFS的日志文件，记录了所有影响文件系统的操作，用于系统崩溃后的恢复。$MFT（主文件表）存储文件元数据，$Bitmap记录簇的分配状态，$Boot是引导扇区。"
    },
    {
      id: 16,
      question: "Android系统日志通常存储在（）目录下",
      options: ["A. /data/log", "B. /system/log", "C. /var/log", "D. /dev/log"],
      answer: "D",
      explanation: "Android系统使用日志驱动程序，日志数据存储在/dev/log/main、/dev/log/system、/dev/log/radio等伪文件中。/var/log是Linux系统的日志目录。"
    },
    {
      id: 17,
      question: "iOS系统的本地备份文件通常存储在计算机的哪个位置（Windows系统）？",
      options: ["A. C:\\iTunes Backup", "B. C:\\Users\\用户名\\AppData\\Roaming\\Apple Computer\\MobileSync\\Backup", "C. C:\\Program Files\\Apple\\Backup", "D. C:\\Windows\\Apple\\Backup"],
      answer: "B",
      explanation: "iTunes备份在Windows中默认存储在用户目录下的AppData\\Roaming\\Apple Computer\\MobileSync\\Backup文件夹中，每个备份以UUID命名。"
    },
    {
      id: 18,
      question: "数据恢复的成功率与以下哪个因素关系最小？",
      options: ["A. 存储介质类型", "B. 文件被删除的时间", "C. 是否被覆盖", "D. 覆盖次数"],
      answer: "B",
      explanation: "数据恢复成功率主要取决于：存储介质类型（机械硬盘/固态硬盘）、是否被覆盖、覆盖次数等。文件被删除的时间本身不直接影响恢复成功率，关键在于删除后是否被新数据覆盖。"
    },
    {
      id: 19,
      question: "在电子数据取证中，最常用的哈希算法是（）",
      options: ["A. MD5", "B. SHA-1", "C. SHA-256", "D. 以上都是"],
      answer: "D",
      explanation: "MD5、SHA-1和SHA-256都是电子数据取证中常用的哈希算法。MD5和SHA-1在国内使用更广泛，SHA-256安全性更高。不同场景和机构可能要求使用不同的算法。"
    },
    {
      id: 20,
      question: "只读设备不能防止以下哪种情况导致的数据变化？",
      options: ["A. 外部写操作", "B. 固态硬盘主控的自主工作", "C. 用户误删除", "D. 病毒写入"],
      answer: "B",
      explanation: "只读设备只能防止外部对存储介质的写操作，但无法阻止固态硬盘（SSD）内部主控芯片的自主工作流程（如磨损均衡、垃圾回收、数据调度等），这些操作可能导致数据变化。"
    },
    {
      id: 21,
      question: "以下哪项不属于电子证据的基本特性？",
      options: ["A. 脆弱性", "B. 多态性", "C. 不可复制性", "D. 人机交互性"],
      answer: "C",
      explanation: "电子证据具有易复制性（而非不可复制性），这是其重要特征之一。其他特性包括：脆弱性（易被修改删除）、多态性（多种存在形态）、人机交互性（反映操作者行为）。"
    },
    {
      id: 22,
      question: "制作硬盘镜像时选择'复制所有扇区'的主要目的是（）",
      options: ["A. 节省存储空间", "B. 提高复制速度", "C. 实现对已删除数据的恢复", "D. 只复制有效文件"],
      answer: "C",
      explanation: "复制所有扇区（Bit-by-bit copy）可以完整复制整个磁盘，包括已删除但未被覆盖的数据、未分配空间、Slack空间等，为后续的数据恢复和深度分析提供完整数据。"
    },
    {
      id: 23,
      question: "以下哪个属于私有IP地址？",
      options: ["A. 8.8.8.8", "B. 192.168.1.1", "C. 114.114.114.114", "D. 1.1.1.1"],
      answer: "B",
      explanation: "192.168.0.0~192.168.255.255是RFC1918定义的C类私有地址。8.8.8.8（Google DNS）、114.114.114.114（国内DNS）、1.1.1.1（Cloudflare DNS）都是公网地址。"
    },
    {
      id: 24,
      question: "关于Windows系统日志，以下说法错误的是（）",
      options: ["A. 系统日志记录系统组件产生的事件", "B. 安全日志记录登录等安全事件", "C. 应用程序日志记录程序运行事件", "D. 日志文件一旦删除就无法恢复"],
      answer: "D",
      explanation: "Windows日志文件（存储在C:\\Windows\\System32\\winevt\\Logs）被删除后，如果未被覆盖，可以通过数据恢复技术恢复。日志是取证分析的重要来源。"
    },
    {
      id: 25,
      question: "手机取证中，IMEI是指（）",
      options: ["A. 用户识别码", "B. 国际移动设备识别码", "C. 用户归属网络码", "D. 设备序列号"],
      answer: "B",
      explanation: "IMEI（International Mobile Equipment Identity）是国际移动设备识别码，由15位数字组成，用于唯一标识移动设备。IMSI是用户识别码，序列号由厂商定义。"
    },
    {
      id: 26,
      question: "电子物证检验记录要求不包括（）",
      options: ["A. 记录检验人员操作过程", "B. 记录软硬件设备操作参数", "C. 记录检出数据的完整性校验值", "D. 记录检验人员的个人隐私信息"],
      answer: "D",
      explanation: "根据《电子物证鉴定记录要求》，检验记录应包括操作过程、设备参数、哈希校验值、异常数据及原因等，但不应包含与检验无关的个人隐私信息。"
    },
    {
      id: 27,
      question: "数据恢复时，覆盖次数越多，数据恢复的成功率（）",
      options: ["A. 越高", "B. 越低", "C. 不变", "D. 与覆盖次数无关"],
      answer: "B",
      explanation: "数据被覆盖后，原始数据会被新数据替换。覆盖次数越多，原始数据被彻底破坏的可能性越大，恢复成功率越低。对于传统机械硬盘，即使一次覆盖也可能导致数据无法恢复。"
    },
    {
      id: 28,
      question: "从事电子物证鉴定的鉴定人应具有（）以上学历",
      options: ["A. 大专", "B. 大学本科", "C. 硕士研究生", "D. 博士研究生"],
      answer: "B",
      explanation: "根据CNAS-CL08等认可准则，从事电子物证鉴定的鉴定人应具有计算机科学与技术等相关专业大学本科及以上学历，并具备执业资格。"
    },
    {
      id: 29,
      question: "以下哪个不是电子证据的常见形式？",
      options: ["A. 计算机系统中的数据", "B. 通讯设备中的数据", "C. 纸质合同原件", "D. 其他电子设备中的数据"],
      answer: "C",
      explanation: "电子证据是指利用电子技术手段生成、存储、传输的证据，包括计算机数据、通讯设备数据、电子设备数据等。纸质合同属于传统书证，不属于电子证据。"
    },
    {
      id: 30,
      question: "关于文件签名分析，以下说法正确的是（）",
      options: ["A. 文件签名就是文件扩展名", "B. 文件签名位于文件尾部", "C. 文件签名可用于识别文件真实类型", "D. 所有文件都有相同的签名"],
      answer: "C",
      explanation: "文件签名（Magic Number）是文件头部或尾部的特定字节序列，用于标识文件真实类型，与文件扩展名无关。不同文件类型有不同的签名。"
    },
    {
      id: 31,
      question: "Windows系统中打开事件查看器的命令是（）",
      options: ["A. eventvwr.msc", "B. eventlog.exe", "C. logview.msc", "D. viewer.exe"],
      answer: "A",
      explanation: "eventvwr.msc是Windows事件查看器的命令，用于查看系统日志、安全日志和应用程序日志，是电子物证分析的重要工具。"
    },
    {
      id: 32,
      question: "Linux系统中查看IP地址的命令是（）",
      options: ["A. ipconfig", "B. ifconfig 或 ip addr", "C. netcfg", "D. showip"],
      answer: "B",
      explanation: "Linux系统中ifconfig和ip addr（现代系统更推荐）用于查看和配置网络接口信息。ipconfig是Windows命令。"
    },
    {
      id: 33,
      question: "关于SQLite数据库，以下说法正确的是（）",
      options: ["A. SQLite是客户端-服务器架构数据库", "B. SQLite数据库是单个文件存储", "C. SQLite不支持删除数据恢复", "D. SQLite只能用于Windows系统"],
      answer: "B",
      explanation: "SQLite是轻量级嵌入式数据库，整个数据库存储在单个文件中（.db、.sqlite等），广泛用于手机APP（如微信、QQ等）。通过专用工具可以解析和恢复删除数据。"
    },
    {
      id: 34,
      question: "以下哪个是常见的文件系统类型？",
      options: ["A. JPEG", "B. NTFS", "C. TCP/IP", "D. HTTP"],
      answer: "B",
      explanation: "NTFS（New Technology File System）是Windows系统常用的文件系统。JPEG是图像格式，TCP/IP是网络协议，HTTP是应用层协议。"
    },
    {
      id: 35,
      question: "电子数据取证的首要原则是（）",
      options: ["A. 速度优先", "B. 不修改原始数据", "C. 成本最低", "D. 工具最新"],
      answer: "B",
      explanation: "不修改原始数据（Don't Change Original Data）是电子数据取证的首要原则。取证过程中应使用只读设备、制作镜像，确保原始检材的完整性。"
    },
    {
      id: 36,
      question: "关于RAM镜像（内存取证），以下说法正确的是（）",
      options: ["A. RAM数据断电后永久保存", "B. RAM镜像无法提取密码信息", "C. RAM镜像可以提取运行中的进程和网络连接", "D. RAM取证不需要特殊工具"],
      answer: "C",
      explanation: "RAM是易失性存储器，断电后数据丢失。内存取证可以提取运行中的进程、网络连接、密码、加密密钥等易失性数据，需要专用工具（如DumpIt、Volatility等）。"
    },
    {
      id: 37,
      question: "Windows系统中，网页浏览器历史记录通常存储在（）",
      options: ["A. C:\\Windows\\Temp", "B. C:\\Users\\用户名\\AppData\\Local", "C. C:\\Program Files", "D. C:\\Windows\\System32"],
      answer: "B",
      explanation: "浏览器数据（历史记录、缓存、Cookie等）通常存储在用户目录下的AppData\\Local（或Roaming）中。Chrome在Google\\Chrome\\User Data，Edge在Microsoft\\Edge\\User Data。"
    },
    {
      id: 38,
      question: "关于微信聊天记录取证，以下说法正确的是（）",
      options: ["A. 微信聊天记录无法恢复", "B. 微信聊天记录存储在服务器上，本地无法获取", "C. 微信聊天记录以SQLite数据库形式存储在本地", "D. 微信聊天记录不包含时间戳信息"],
      answer: "C",
      explanation: "微信聊天记录主要存储在本地SQLite数据库（EnMicroMsg.db等）中，包含消息内容、时间戳、发送者等完整信息。通过数据库解析和已删除数据恢复技术可以提取。"
    },
    {
      id: 39,
      question: "关于BitLocker加密，以下说法正确的是（）",
      options: ["A. BitLocker是Linux系统加密工具", "B. BitLocker无法被取证工具解密", "C. BitLocker是Windows内置的磁盘加密功能", "D. BitLocker只能加密文件不能加密磁盘"],
      answer: "C",
      explanation: "BitLocker是Windows系统（Vista及以上）内置的全磁盘加密功能，使用AES算法加密。在获取恢复密钥或密码的情况下，专业取证工具可以进行离线解密。"
    },
    {
      id: 40,
      question: "USB设备使用记录在Windows系统中通常存储在注册表的（）位置",
      options: ["A. HKEY_CURRENT_USER", "B. HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USB", "C. HKEY_CLASSES_ROOT", "D. HKEY_USERS"],
      answer: "B",
      explanation: "Windows注册表中HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USB和USBSTOR记录了USB设备的插拔历史、设备序列号、首次和最后使用时间等关键信息。"
    },
    {
      id: 41,
      question: "关于RAID磁盘阵列，以下说法正确的是（）",
      options: ["A. RAID0提供数据冗余", "B. RAID1是条带化存储", "C. RAID5至少需要3块硬盘", "D. RAID所有级别都提高存储容量"],
      answer: "C",
      explanation: "RAID5至少需要3块硬盘，采用分布式奇偶校验提供数据冗余。RAID0是条带化无冗余，RAID1是镜像，不同RAID级别有不同特性。"
    },
    {
      id: 42,
      question: "手机取证APP在取证完成后，应（）",
      options: ["A. 保留在手机中", "B. 提示卸载，清除取证痕迹", "C. 不需要处理", "D. 设置为系统应用"],
      answer: "B",
      explanation: "手机取证规范要求，取证APP在完成任务后应提示卸载，清除取证痕迹，避免对原始数据造成污染或留下不必要的文件。"
    },
    {
      id: 43,
      question: "HPA（Host Protected Area）和DCO（Device Configuration Overlay）是（）",
      options: ["A. 文件系统类型", "B. 硬盘上的隐藏区域", "C. 网络协议", "D. 加密算法"],
      answer: "B",
      explanation: "HPA和DCO是硬盘上的特殊隐藏区域，可以存储用户无法直接访问的数据。取证时需要识别和处理这些区域，以获取完整数据。"
    },
    {
      id: 44,
      question: "关于电子证据保全，以下说法错误的是（）",
      options: ["A. 应尽可能使用克隆数据而非原始检材进行分析", "B. 提取方法不能改变物证", "C. 可以随意使用任何工具进行提取", "D. 检验人员需经过专业培训"],
      answer: "C",
      explanation: "电子证据保全必须使用经过验证的专业工具，遵循标准操作规程（SOP），确保提取方法不改变原始数据，检验人员需具备专业资质。"
    },
    {
      id: 45,
      question: "SIM卡取证可以提取的信息不包括（）",
      options: ["A. 通讯录", "B. 短信", "C. 通话记录", "D. 手机拍照照片"],
      answer: "D",
      explanation: "SIM卡存储容量有限，通常存储通讯录、短信、通话记录等。手机拍照照片存储在手机内部存储或SD卡中，不在SIM卡上。"
    },
    {
      id: 46,
      question: "APK静态分析可以提取的信息不包括（）",
      options: ["A. 字符串", "B. URL地址", "C. 实时运行日志", "D. 权限列表"],
      answer: "C",
      explanation: "APK静态分析是在不运行APP的情况下分析APK文件，可以提取字符串、URL、权限、入口函数等。实时运行日志需要动态分析（运行APP时获取）。"
    },
    {
      id: 47,
      question: "动态取证是指（）",
      options: ["A. 对关机状态的计算机取证", "B. 对运行中系统的实时取证", "C. 对硬盘镜像取证", "D. 对手机备份文件取证"],
      answer: "B",
      explanation: "动态取证（Live Forensics）是对运行中系统的实时取证，获取进程、内存、网络连接、登录会话等易失性数据。关机状态、硬盘镜像、备份文件取证属于静态取证。"
    },
    {
      id: 48,
      question: "SHA-256哈希值的长度是（）位",
      options: ["A. 128", "B. 160", "C. 256", "D. 512"],
      answer: "C",
      explanation: "SHA-256产生256位（32字节）的哈希值，以64位十六进制字符串表示。MD5是128位，SHA-1是160位，SHA-512是512位。"
    },
    {
      id: 49,
      question: "电子邮件头信息（Email Header）不包含（）",
      options: ["A. 发件人地址", "B. 收件人地址", "C. 邮件正文内容", "D. 发送服务器信息"],
      answer: "C",
      explanation: "邮件头信息包含发件人（From）、收件人（To）、抄送（Cc）、发送时间、邮件服务器路径（Received）、主题（Subject）等元数据，但不包含邮件正文（Body）内容。"
    },
    {
      id: 50,
      question: "系统仿真取证的主要目的是（）",
      options: ["A. 提高系统性能", "B. 还原系统运行环境，便于分析", "C. 修复系统漏洞", "D. 安装新软件"],
      answer: "B",
      explanation: "系统仿真取证是通过虚拟机或专用工具加载镜像，还原系统运行环境，以便分析用户操作行为、软件使用情况、浏览历史等，同时不影响原始证据。"
    }
,
    {
      id: 91,
      question: "我国电子物证数据恢复检验的国家标准编号是（）",
      options: ["A. GB/T 29360-2012", "B. GB/T 29361-2012", "C. GB/T 29362-2012", "D. GA/T 756-2008"],
      answer: "A",
      explanation: "GB/T 29360-2012是《电子物证数据恢复检验规程》的国家标准编号。GB/T 29361是文件一致性检验规程，GB/T 29362是数据搜索检验规程，GA/T 756是数字化设备证据数据发现提取固定方法。"
    },
    {
      id: 92,
      question: "GA/T 976-2012标准的名称是（）",
      options: ["A. 电子物证数据恢复检验规程", "B. 电子数据法庭科学鉴定通用方法", "C. 移动终端取证检验方法", "D. 电子物证数据搜索检验规程"],
      answer: "B",
      explanation: "GA/T 976-2012是《电子数据法庭科学鉴定通用方法》，规定了电子数据司法鉴定的通用原则和方法。"
    },
    {
      id: 93,
      question: "《关于办理刑事案件收集提取和审查判断电子数据若干问题的规定》由哪个部门发布？",
      options: ["A. 公安部", "B. 最高人民法院、最高人民检察院、公安部", "C. 司法部", "D. 国家网信办"],
      answer: "B",
      explanation: "该规定于2016年由最高人民法院、最高人民检察院、公安部联合发布（法发〔2016〕22号），是规范电子数据取证的重要司法解释。"
    },
    {
      id: 94,
      question: "收集、提取电子数据，应当由（）以上侦查人员进行",
      options: ["A. 一名", "B. 二名", "C. 三名", "D. 四名"],
      answer: "B",
      explanation: "根据《电子数据规定》第七条，收集、提取电子数据应当由二名以上侦查人员进行，取证方法应当符合相关技术标准。"
    },
    {
      id: 95,
      question: "电子数据收集提取时，能够扣押原始存储介质的，应当（）",
      options: ["A. 优先扣押、封存原始存储介质", "B. 直接提取电子数据即可", "C. 仅拍照固定", "D. 远程勘验即可"],
      answer: "A",
      explanation: "《电子数据规定》第八条明确：能够扣押原始存储介质的，应当扣押、封存原始存储介质，这是优先取证措施。"
    },
    {
      id: 96,
      question: "DNS协议主要使用的服务端口号是（）",
      options: ["A. 53", "B. 80", "C. 443", "D. 25"],
      answer: "A",
      explanation: "DNS（域名系统）使用UDP/TCP 53端口进行域名解析。HTTP使用80端口，HTTPS使用443端口，SMTP使用25端口。"
    },
    {
      id: 97,
      question: "HTTP服务使用的传输层协议和端口是（）",
      options: ["A. TCP 80", "B. UDP 80", "C. TCP 53", "D. UDP 443"],
      answer: "A",
      explanation: "HTTP（超文本传输协议）使用TCP 80端口。HTTPS使用TCP 443端口。DNS主要使用UDP 53端口。"
    },
    {
      id: 98,
      question: "ARP协议的功能是（）",
      options: ["A. 将IP地址解析为MAC地址", "B. 将MAC地址解析为IP地址", "C. 将域名解析为IP地址", "D. 将IP地址解析为域名"],
      answer: "A",
      explanation: "ARP（Address Resolution Protocol）地址解析协议，功能是根据IP地址获取对应的MAC地址（物理地址）。DNS用于域名解析。"
    },
    {
      id: 99,
      question: "下列IP地址中只能作为源IP地址不能作为目的IP地址的是（）",
      options: ["A. 0.0.0.0", "B. 127.0.0.1", "C. 192.168.1.1", "D. 255.255.255.255"],
      answer: "A",
      explanation: "0.0.0.0表示本网络上的本主机，只能作为源地址（如DHCP发现阶段）。127.0.0.1是环回地址，255.255.255.255是广播地址。"
    },
    {
      id: 100,
      question: "SMTP协议用于（）",
      options: ["A. 发送电子邮件", "B. 接收电子邮件", "C. 域名解析", "D. 文件传输"],
      answer: "A",
      explanation: "SMTP（Simple Mail Transfer Protocol）简单邮件传输协议，用于发送电子邮件。POP3/IMAP用于接收邮件。FTP用于文件传输。"
    },
    {
      id: 101,
      question: "接收电子邮件通常使用的协议是（）",
      options: ["A. SMTP", "B. POP3 或 IMAP", "C. FTP", "D. HTTP"],
      answer: "B",
      explanation: "POP3（Post Office Protocol v3）和IMAP（Internet Message Access Protocol）是接收电子邮件的常用协议。SMTP用于发送邮件。"
    },
    {
      id: 102,
      question: "Ping命令使用的协议是（）",
      options: ["A. TCP", "B. UDP", "C. ICMP", "D. ARP"],
      answer: "C",
      explanation: "Ping命令使用ICMP（Internet Control Message Protocol）协议的Echo Request和Echo Reply消息来测试网络连通性。"
    },
    {
      id: 103,
      question: "Tracert命令的原理是基于（）",
      options: ["A. TCP连接超时", "B. UDP超时和ICMP错误", "C. ARP广播", "D. DNS查询"],
      answer: "B",
      explanation: "Tracert（Windows）/Traceroute（Linux）通过发送TTL递增的UDP数据包（或ICMP Echo），利用路由器返回的ICMP超时或目的主机返回的ICMP端口不可达消息来追踪路由路径。"
    },
    {
      id: 104,
      question: "MAC地址的长度是（）位",
      options: ["A. 32", "B. 48", "C. 64", "D. 128"],
      answer: "B",
      explanation: "MAC地址（Media Access Control Address）是48位（6字节）的物理地址，通常以十六进制表示，如00:1A:2B:3C:4D:5E。"
    },
    {
      id: 105,
      question: "TCP和UDP分别使用的协议号是（）",
      options: ["A. 6和17", "B. 17和6", "C. 1和6", "D. 6和1"],
      answer: "A",
      explanation: "在IP协议字段中，TCP的协议号是6，UDP的协议号是17，ICMP的协议号是1。这是TCP/IP协议栈的基本知识。"
    },
    {
      id: 106,
      question: "Chrome浏览器80版本以后，Cookies文件存储在以下哪个路径（）",
      options: ["A. Default\\Cookies", "B. Default\\Network\\Cookies", "C. Default\\History", "D. Cache\\Cookies"],
      answer: "B",
      explanation: "Chrome 80版本以后Cookie文件路径变更为Default\\Network\\Cookies。110版本以后也沿用此路径。History是历史记录文件，不是Cookie。"
    },
    {
      id: 107,
      question: "Chrome浏览器历史记录文件本质上是（）",
      options: ["A. 文本文件", "B. SQLite数据库", "C. XML文件", "D. JSON文件"],
      answer: "B",
      explanation: "Chrome浏览器的History、Cookies、Login Data等文件本质上都是SQLite数据库，可以使用SQLite查看工具进行解析。"
    },
    {
      id: 108,
      question: "IE浏览器10及以后版本的历史记录存储在（）",
      options: ["A. index.dat", "B. WebCacheV01.dat", "C. History.plist", "D. places.sqlite"],
      answer: "B",
      explanation: "IE10及以后版本使用ESDB（Enhanced Storage Database）格式，历史记录等数据存储在WebCacheV01.dat中。index.dat是IE9及以前版本的格式。"
    },
    {
      id: 109,
      question: "Chrome浏览器中保存的用户名和密码存储在（）文件",
      options: ["A. Cookies", "B. Login Data", "C. Local State", "D. History"],
      answer: "B",
      explanation: "Chrome使用Login Data SQLite数据库存储用户保存的用户名和密码。Local State文件存储加密密钥相关信息。"
    },
    {
      id: 110,
      question: "Chrome 80版本以后对密码采用的加密方式是（）",
      options: ["A. DPAPI", "B. AES-256-GCM", "C. DES", "D. RSA"],
      answer: "B",
      explanation: "Chrome 80版本以后，密码加密前缀为v10/v11，采用AES-256-GCM加密。80版本以前使用DPAPI（Windows数据保护API）加密。"
    },
    {
      id: 111,
      question: "iPhone手机的短信数据存储在（）数据库中",
      options: ["A. contacts.db", "B. sms.db", "C. mmssms.db", "D. EnMicroMsg.db"],
      answer: "B",
      explanation: "iPhone的短信数据存储在sms.db SQLite数据库中，位于AppDomain区域。mmssms.db是Android手机的短信数据库。EnMicroMsg.db是微信数据库。"
    },
    {
      id: 112,
      question: "Android手机的微信数据存储在以下哪个目录（）",
      options: ["A. /data/data/com.tencent.mm/MicroMsg/", "B. /sdcard/WeChat/", "C. /system/app/WeChat/", "D. /data/data/com.tencent.mobileqq/"],
      answer: "A",
      explanation: "Android微信数据存储在/data/data/com.tencent.mm/MicroMsg/目录下，包含EnMicroMsg.db等数据库文件。com.tencent.mobileqq是QQ的包名。"
    },
    {
      id: 113,
      question: "iOS设备越狱后可以获取的额外权限是（）",
      options: ["A. 只能访问应用沙盒", "B. 可以访问完整的文件系统", "C. 不能访问任何文件", "D. 只能访问照片"],
      answer: "B",
      explanation: "越狱（Jailbreak）绕过iOS系统限制，可以获取root权限，访问完整的文件系统，提取更多系统级数据。未越狱设备只能访问应用沙盒和备份数据。"
    },
    {
      id: 114,
      question: "Android手机在未ROOT情况下进行取证，通常采用（）",
      options: ["A. 物理镜像", "B. 逻辑提取或ADB备份", "C. 芯片提取", "D. 直接访问/data分区"],
      answer: "B",
      explanation: "未ROOT的Android手机无法直接访问/data分区或制作物理镜像，通常采用逻辑提取（通过ADB、厂商备份工具等）或ADB备份方式获取数据。"
    },
    {
      id: 115,
      question: "libimobiledevice工具集中的idevicebackup2命令用于（）",
      options: ["A. 获取设备信息", "B. 创建和管理iOS备份", "C. 查看系统日志", "D. 获取屏幕截图"],
      answer: "B",
      explanation: "idevicebackup2是libimobiledevice工具集中用于创建和管理iOS备份的命令。ideviceinfo获取设备信息，idevicesyslog查看日志，idevicescreenshot获取截图。"
    },
    {
      id: 116,
      question: "SQLite数据库中被删除的数据可以通过（）恢复",
      options: ["A. 直接打开数据库文件", "B. 解析空闲页和未分配空间", "C. 重新安装数据库软件", "D. 无法恢复"],
      answer: "B",
      explanation: "SQLite删除数据时通常标记为空闲页，数据并未立即物理删除。通过解析数据库文件中的空闲页（free pages）和未分配空间（unallocated space），可以恢复已删除的数据记录。"
    },
    {
      id: 117,
      question: "SQLite数据库文件头的前16字节特征是（）",
      options: ["A. 'PK' 开头", "B. 'SQLite format 3' 加空字节", "C. 'MM' 开头", "D. 'GIF89a' 开头"],
      answer: "B",
      explanation: "SQLite数据库文件以'SQlite format 3'（16字节）作为文件头签名。'PK'是ZIP/APK格式，'MM'是TIFF格式，'GIF89a'是GIF格式。"
    },
    {
      id: 118,
      question: "Android手机mmssms.db数据库中存储短信内容的主要表是（）",
      options: ["A. contacts", "B. sms", "C. threads", "D. calls"],
      answer: "B",
      explanation: "mmssms.db（或telephony.db）中sms表存储短信内容，threads表存储会话信息，contacts是通讯录，calls是通话记录。"
    },
    {
      id: 119,
      question: "Windows系统中使用DPAPI加密的数据，在取证时（）",
      options: ["A. 可以在任意计算机上解密", "B. 只能在加密时的用户账户下解密", "C. 不需要任何密钥", "D. 只能通过暴力破解"],
      answer: "B",
      explanation: "DPAPI（Data Protection API）使用与用户账户绑定的密钥加密数据。取证时通常需要在原用户环境下解密，或通过提取Master Key后在相同SID环境下解密。"
    },
    {
      id: 120,
      question: "BitLocker使用的加密算法是（）",
      options: ["A. DES", "B. AES", "C. RC4", "D. MD5"],
      answer: "B",
      explanation: "BitLocker使用AES（Advanced Encryption Standard）算法加密磁盘数据。Win10中支持XTS-AES模式。MD5是哈希算法，不是加密算法。"
    },
    {
      id: 121,
      question: "EFS（加密文件系统）是以下哪个文件系统的功能（）",
      options: ["A. FAT32", "B. NTFS", "C. exFAT", "D. Ext4"],
      answer: "B",
      explanation: "EFS（Encrypting File System）是NTFS文件系统内置的加密功能，使用公钥加密体系保护文件。FAT32/exFAT不支持EFS。"
    },
    {
      id: 122,
      question: "TrueCrypt/VeraCrypt加密的分区，在取证时（）",
      options: ["A. 无法解密", "B. 获取密码后可通过工具挂载解密", "C. 直接复制即可读取", "D. 只能通过格式化恢复"],
      answer: "B",
      explanation: "TrueCrypt/VeraCrypt是磁盘加密工具，取证时如果获取了密码、密钥文件或密钥头，可以通过专业取证工具（如FTK、X-Ways）进行挂载解密。"
    },
    {
      id: 123,
      question: "内存取证（RAM Forensics）主要获取的是（）",
      options: ["A. 永久存储的数据", "B. 易失性数据", "C. 已删除的数据", "D. 加密后的数据"],
      answer: "B",
      explanation: "内存取证获取的是易失性数据（Volatile Data），包括运行中的进程、网络连接、密码、加密密钥、注册表等。RAM断电后数据丢失，属于易失性存储。"
    },
    {
      id: 124,
      question: "Volatility框架主要用于（）",
      options: ["A. 硬盘镜像分析", "B. 内存镜像分析", "C. 网络流量分析", "D. 手机数据提取"],
      answer: "B",
      explanation: "Volatility是开源的内存取证框架，用于分析Windows、Linux、MacOS的内存镜像（RAM dump），提取进程、网络连接、注册表、密码等易失性数据。"
    },
    {
      id: 125,
      question: "内存取证时应优先提取的数据是（）",
      options: ["A. 硬盘分区表", "B. 内存中的密码、密钥和进程信息", "C. 历史浏览记录", "D. 系统日志文件"],
      answer: "B",
      explanation: "内存中的数据（密码、密钥、进程、网络连接等）具有易失性，断电后会丢失。根据取证原则，应优先收集提取易失性数据，再处理非易失性数据。"
    },
    {
      id: 126,
      question: "恶意代码的静态分析方法不包括（）",
      options: ["A. 反病毒软件扫描", "B. 二进制结构分析", "C. 沙箱运行分析", "D. 反汇编分析"],
      answer: "C",
      explanation: "沙箱运行分析属于动态分析（在受控环境中运行程序观察行为）。静态分析包括反病毒扫描、二进制分析、反汇编、反编译等，不运行程序。"
    },
    {
      id: 127,
      question: "IDA Pro是一款（）工具",
      options: ["A. 反病毒软件", "B. 反汇编和逆向工程工具", "C. 磁盘镜像工具", "D. 内存取证工具"],
      answer: "B",
      explanation: "IDA Pro（Interactive DisAssembler）是业界著名的反汇编和逆向工程工具，用于分析二进制程序、恶意代码的汇编代码和逻辑结构。"
    },
    {
      id: 128,
      question: "木马程序通常通过修改（）实现开机自启动",
      options: ["A. 文件扩展名", "B. 注册表启动项", "C. 桌面壁纸", "D. 系统日期"],
      answer: "B",
      explanation: "木马程序常见的持久化机制包括修改注册表启动项（如Run键）、创建服务、计划任务等。"
    },
    {
      id: 129,
      question: "Process Monitor（Procmon）工具的功能是（）",
      options: ["A. 查看进程列表", "B. 实时监视文件系统、注册表和进程活动", "C. 内存分析", "D. 网络抓包"],
      answer: "B",
      explanation: "Process Monitor（Procmon）是Sysinternals工具，实时监视文件系统、注册表、进程和线程的DLL活动。是恶意代码动态分析的重要工具。"
    },
    {
      id: 130,
      question: "JADX是一款用于（）的工具",
      options: ["A. 反编译APK", "B. 提取硬盘镜像", "C. 内存分析", "D. 网络扫描"],
      answer: "A",
      explanation: "JADX是开源的Android APK反编译工具，可以将.dex文件反编译为Java源代码，用于分析APK程序逻辑、查找恶意代码、提取URL等。"
    },
    {
      id: 131,
      question: "Windows系统中事件日志文件的默认存储路径是（）",
      options: ["A. C:\\Windows\\System32\\winevt\\Logs", "B. C:\\Windows\\Logs", "C. C:\\Windows\\System32\\log", "D. C:\\ProgramData\\Logs"],
      answer: "A",
      explanation: "Windows Vista及以后版本，事件日志（.evtx格式）存储在C:\\Windows\\System32\\winevt\\Logs目录下。旧版本（XP）使用.evt格式。"
    },
    {
      id: 132,
      question: "Linux系统日志通常由（）服务管理",
      options: ["A. Windows Event Log", "B. syslog/rsyslog/systemd-journald", "C. Event Viewer", "D. Task Scheduler"],
      answer: "B",
      explanation: "Linux系统日志传统由syslog/rsyslog服务管理，现代系统使用systemd-journald。Windows Event Log和Event Viewer是Windows系统。"
    },
    {
      id: 133,
      question: "Windows安全日志中，事件ID 4624表示（）",
      options: ["A. 用户登录失败", "B. 用户成功登录", "C. 文件被删除", "D. 服务被启动"],
      answer: "B",
      explanation: "Windows安全日志中：4624表示成功登录，4625表示登录失败，4634表示注销。"
    },
    {
      id: 134,
      question: "Apache服务器的访问日志文件默认名为（）",
      options: ["A. error.log", "B. access.log", "C. system.log", "D. security.log"],
      answer: "B",
      explanation: "Apache服务器的访问日志（记录用户访问请求）默认文件名为access.log，错误日志为error.log。"
    },
    {
      id: 135,
      question: "NTFS文件系统中$MFT记录大小通常为（）字节",
      options: ["A. 512", "B. 1024", "C. 2048", "D. 4096"],
      answer: "B",
      explanation: "NTFS中每个$MFT（主文件表）记录通常固定为1024字节（1KB），存储文件的所有元数据信息。"
    },
    {
      id: 136,
      question: "NTFS文件系统中的$UsnJrnl是（）",
      options: ["A. 日志文件", "B. 更新序列号日志（USN Journal）", "C. 位图文件", "D. 引导扇区"],
      answer: "B",
      explanation: "$UsnJrnl（USN Journal）是NTFS的更新序列号日志，记录文件系统中所有文件的修改操作，是时间线分析的重要数据源。"
    },
    {
      id: 137,
      question: "FAT32文件系统中用于存储文件分配表的是（）",
      options: ["A. MFT", "B. FAT（文件分配表）", "C. $Bitmap", "D. $LogFile"],
      answer: "B",
      explanation: "FAT32名称中的FAT即File Allocation Table（文件分配表），用于记录文件数据在磁盘簇中的分配情况。MFT和$Bitmap是NTFS的组件。"
    },
    {
      id: 138,
      question: "NTFS文件系统中，文件时间戳通常包括（）",
      options: ["A. 创建时间、修改时间、访问时间（MACE）", "B. 仅创建时间", "C. 仅修改时间", "D. 仅删除时间"],
      answer: "A",
      explanation: "NTFS文件时间戳MACE包括：M（Modification，修改时间）、A（Access，访问时间）、C（Creation，创建时间）、E（MFT Entry modified time）。"
    },
    {
      id: 139,
      question: "数字图片的EXIF信息可以包含（）",
      options: ["A. 拍摄设备型号、GPS位置、拍摄时间等", "B. 仅图片像素大小", "C. 仅文件格式", "D. 仅图片文件名"],
      answer: "A",
      explanation: "EXIF（Exchangeable Image File Format）元数据包含丰富的信息：拍摄设备型号、GPS位置坐标、拍摄时间、光圈、快门速度、ISO等。是图片取证的重要来源。"
    },
    {
      id: 140,
      question: "判断数字照片是否被编辑修改过，可以通过分析（）",
      options: ["A. 仅查看文件扩展名", "B. EXIF信息、JPEG量化表、像素级噪声分析等", "C. 仅查看文件大小", "D. 仅查看图片分辨率"],
      answer: "B",
      explanation: "判断图片是否被篡改可通过：EXIF信息一致性检查、JPEG量化表分析（不同编辑软件留下不同特征）、错误级别分析（ELA）、像素级噪声分析、克隆检测等。"
    },
    {
      id: 141,
      question: "电子邮件头中的'Received'字段记录了（）",
      options: ["A. 邮件正文内容", "B. 邮件经过的服务器路径", "C. 附件列表", "D. 邮件模板"],
      answer: "B",
      explanation: "Received字段记录了邮件从发送方到接收方经过的每一台邮件服务器的信息（IP地址、时间戳），可用于追踪邮件来源和传输路径。"
    },
    {
      id: 142,
      question: "Outlook邮件客户端的PST文件本质上是（）",
      options: ["A. 文本文件", "B. 个人存储表（Personal Storage Table）", "C. 图片文件", "D. 压缩包"],
      answer: "B",
      explanation: "PST（Personal Storage Table）是Microsoft Outlook使用的专有文件格式，用于存储邮件、联系人、日历等数据。新版Outlook使用OST（Offline Storage Table）格式。"
    },
    {
      id: 143,
      question: "区块链在电子数据存证中的主要优势是（）",
      options: ["A. 数据完全不可删除", "B. 数据不可篡改且可追溯", "C. 数据存储完全免费", "D. 数据存储速度更快"],
      answer: "B",
      explanation: "区块链通过分布式账本和共识机制，使数据具有不可篡改性和可追溯性，适合用于电子数据存证以证明数据在某一时间点的存在和完整性。"
    },
    {
      id: 144,
      question: "对于云计算平台的电子数据取证，以下说法正确的是（）",
      options: ["A. 只能获取云端数据，无法获取本地数据", "B. 可以根据不同云计算环境选择对应方式收集提取", "C. 云数据无法作为证据", "D. 云数据取证不需要任何法律授权"],
      answer: "B",
      explanation: "根据GA/T 756-2021，对于云计算平台的数据，应根据不同的云计算环境（IaaS、PaaS、SaaS等）选择对应的方式进行数据收集提取。云数据取证同样需要法律授权。"
    },
    {
      id: 145,
      question: "物联网设备取证时，主要关注的数据包括（）",
      options: ["A. 仅设备外壳", "B. 设备日志、固件、网络通信数据等", "C. 仅设备包装盒", "D. 仅设备说明书"],
      answer: "B",
      explanation: "物联网设备取证应关注：设备固件（Firmware）、系统日志、网络通信数据（如MQTT报文）、传感器数据、配置信息等。"
    },
    {
      id: 146,
      question: "电子数据取证中的时间线分析（Timeline Analysis）主要用于（）",
      options: ["A. 统计文件大小", "B. 按时间顺序重构事件过程", "C. 计算文件哈希值", "D. 压缩存储空间"],
      answer: "B",
      explanation: "时间线分析是将文件系统时间戳、日志时间、注册表时间、浏览器历史时间等按时间顺序排列，重构用户操作行为和事件发展过程。"
    },
    {
      id: 147,
      question: "MACE时间戳中，'E'指的是（）",
      options: ["A. 编辑时间", "B. MFT记录修改时间（Entry modified time）", "C. 执行时间", "D. 结束时间"],
      answer: "B",
      explanation: "MACE时间戳：M（Modification，修改时间）、A（Access，访问时间）、C（Creation，创建时间）、E（MFT Entry modified time，MFT记录修改时间）。"
    },
    {
      id: 148,
      question: "APK文件中AndroidManifest.xml文件的作用是（）",
      options: ["A. 存储图片资源", "B. 描述应用配置和权限声明", "C. 存储用户数据", "D. 存储聊天记录"],
      answer: "B",
      explanation: "AndroidManifest.xml是APK的配置文件，声明应用包名、版本、所需权限、组件（Activity、Service等）、入口函数等。静态分析时首先要解析此文件。"
    },
    {
      id: 149,
      question: "反编译Android APK时，通常先将APK中的（）文件反编译为Java代码",
      options: ["A. classes.dex", "B. AndroidManifest.xml", "C. resources.arsc", "D. META-INF"],
      answer: "A",
      explanation: "APK中的classes.dex（Dalvik Executable）包含应用的编译后字节码。反编译时，工具（如JADX、Apktool）将.dex反编译为Java源代码或Smali代码。"
    },
    {
      id: 150,
      question: "对于开机状态下的计算机，取证时应优先收集（）",
      options: ["A. 硬盘镜像", "B. 易失性数据（内存、进程、网络连接等）", "C. 浏览器缓存", "D. 回收站数据"],
      answer: "B",
      explanation: "根据GA/T 756-2021，对于开机状态下的计算机信息系统，应优先收集提取易失性数据，包括内存数据、解密状态的数据和正在运行的程序数据。"
    },
    {
      id: 201,
      question: "《电子数据规定》中，电子数据的冻结措施适用于以下哪种情形？",
      options: ["A. 数据量小，便于提取的", "B. 数据量大，无法或不便收集提取的", "C. 原始存储介质已扣押的", "D. 仅涉及单个文件的"],
      answer: "B",
      explanation: "《电子数据规定》第十一条规定，冻结适用于数据量大、无法或不便收集提取、收集提取时间长可能造成数据被篡改或灭失、通过网络应用可以更为直观地展示电子数据等情形。"
    },
    {
      id: 202,
      question: "电子数据检查笔录中，应当注明的内容不包括（）",
      options: ["A. 检查方法", "B. 检查过程", "C. 检查人员个人隐私", "D. 检查结果"],
      answer: "C",
      explanation: "《电子数据规定》第十六条要求检查笔录注明检查方法、过程和结果，由有关人员签名或盖章。不应包含与检查无关的个人隐私信息。"
    },
    {
      id: 203,
      question: "根据《电子数据规定》，以下哪项不属于电子数据完整性校验的方法？",
      options: ["A. 计算MD5值", "B. 计算SHA-256值", "C. 修改文件扩展名", "D. 与备份数据进行比较"],
      answer: "C",
      explanation: "修改文件扩展名会改变文件外观但不是校验方法。完整性校验方法包括：计算哈希值（MD5/SHA-1/SHA-256）、与备份比较、审查扣押封存状态、查看录像等。"
    },
    {
      id: 204,
      question: "《刑事诉讼法》规定，电子数据属于法定的证据种类之一，是在哪次修正案中明确规定的？",
      options: ["A. 2012年修正案", "B. 2015年修正案", "C. 2018年修正案", "D. 2020年修正案"],
      answer: "A",
      explanation: "2012年《刑事诉讼法》修正案将电子数据与视听资料并列作为一项独立的证据种类，确立了电子数据在刑事诉讼中的法律地位。"
    },
    {
      id: 205,
      question: "电子物证鉴定人应当具备的条件中，不包括（）",
      options: ["A. 计算机相关专业本科以上学历", "B. 电子物证鉴定领域的执业资格", "C. 十年以上工作经验", "D. 经过专业培训与技能考核"],
      answer: "C",
      explanation: "根据CNAS认可准则，从事电子物证鉴定的鉴定人应具有计算机相关专业本科及以上学历，具备执业资格，并接受定期培训与技能考核。没有强制要求十年以上工作经验。"
    },
    {
      id: 206,
      question: "GA/T 756-2021《法庭科学 电子数据收集提取技术规范》中，对于开机状态的计算机信息系统，应优先收集（）",
      options: ["A. 硬盘完整镜像", "B. 易失性数据", "C. 浏览器缓存", "D. 回收站数据"],
      answer: "B",
      explanation: "GA/T 756-2021第4.2.1条规定，对于开机状态下的计算机信息系统，应优先收集提取易失性数据（包括但不限于内存数据、解密状态的数据和正在运行的程序数据）。"
    },
    {
      id: 207,
      question: "根据《电子数据规定》，电子数据收集提取时，无法扣押原始存储介质且无法提取电子数据的，可以采取（）固定证据",
      options: ["A. 仅打印", "B. 仅拍照", "C. 打印、拍照或录像", "D. 仅复制"],
      answer: "C",
      explanation: "《电子数据规定》第九条和GA/T 756-2021第4.2.7条规定，无法扣押原始存储介质且无法提取电子数据的，可以采取打印、拍照或录像等方式固定相关电子数据。"
    },
    {
      id: 208,
      question: "电子数据司法鉴定意见书中，应当包含的内容不包括（）",
      options: ["A. 委托事项", "B. 鉴定过程", "C. 鉴定人个人隐私", "D. 鉴定意见"],
      answer: "C",
      explanation: "司法鉴定意见书应当包含委托事项、鉴定材料、鉴定过程、分析说明、鉴定意见等，不应包含鉴定人个人隐私信息。"
    },
    {
      id: 209,
      question: "《电子数据规定》中，网络远程勘验应当（）",
      options: ["A. 由一名侦查人员进行即可", "B. 制作远程勘验笔录", "C. 无需录像", "D. 无需记录IP地址"],
      answer: "B",
      explanation: "《电子数据规定》规定网络远程勘验应当制作远程勘验笔录，必要时进行录像，记录数据来源、时间、IP地址等关键信息。"
    },
    {
      id: 210,
      question: "电子数据取证时，见证人应当具备的条件是（）",
      options: ["A. 任何公民都可以", "B. 与案件无利害关系", "C. 必须是警察", "D. 必须是专业技术人员"],
      answer: "B",
      explanation: "《电子数据规定》第十五条要求，由于客观原因无法由符合条件的人员担任见证人的，应当在笔录中注明情况。见证人应当与案件无利害关系。"
    },
    {
      id: 211,
      question: "在TCP/IP协议栈中，IP协议位于（）",
      options: ["A. 应用层", "B. 传输层", "C. 网络层", "D. 数据链路层"],
      answer: "C",
      explanation: "IP（Internet Protocol）位于TCP/IP协议栈的网络层，负责数据包的路由和寻址。TCP/UDP在传输层，HTTP/FTP在应用层。"
    },
    {
      id: 212,
      question: "以下哪个端口号通常用于HTTPS服务？",
      options: ["A. 80", "B. 443", "C. 21", "D. 110"],
      answer: "B",
      explanation: "HTTPS（HTTP Secure）使用TCP 443端口，HTTP使用80端口，FTP使用21端口，POP3使用110端口。"
    },
    {
      id: 213,
      question: "FTP协议用于（）",
      options: ["A. 发送电子邮件", "B. 文件传输", "C. 域名解析", "D. 远程登录"],
      answer: "B",
      explanation: "FTP（File Transfer Protocol）文件传输协议，用于在网络上传输文件。SFTP/FTPS是其安全版本。"
    },
    {
      id: 214,
      question: "SSH协议使用的默认端口号是（）",
      options: ["A. 21", "B. 22", "C. 23", "D. 25"],
      answer: "B",
      explanation: "SSH（Secure Shell）使用TCP 22端口，提供安全的远程登录和命令执行。Telnet使用23端口（不安全）。"
    },
    {
      id: 215,
      question: "Telnet协议与SSH协议的主要区别是（）",
      options: ["A. Telnet使用22端口，SSH使用23端口", "B. Telnet传输明文，SSH加密传输", "C. Telnet只能用于Windows", "D. SSH只能用于Linux"],
      answer: "B",
      explanation: "Telnet传输明文数据（用户名、密码、命令等均不加密），SSH对所有通信进行加密。Telnet使用23端口，SSH使用22端口。"
    },
    {
      id: 216,
      question: "DHCP协议的主要功能是（）",
      options: ["A. 域名解析", "B. 动态分配IP地址", "C. 文件传输", "D. 远程登录"],
      answer: "B",
      explanation: "DHCP（Dynamic Host Configuration Protocol）动态主机配置协议，自动为网络设备分配IP地址、子网掩码、网关、DNS等配置。"
    },
    {
      id: 217,
      question: "NAT（网络地址转换）的主要作用是（）",
      options: ["A. 加密网络通信", "B. 将私有IP地址转换为公网IP地址", "C. 域名解析", "D. 病毒扫描"],
      answer: "B",
      explanation: "NAT（Network Address Translation）将局域网内的私有IP地址转换为公网IP地址，实现多个设备共享一个公网IP访问互联网。"
    },
    {
      id: 218,
      question: "交换机根据（）转发数据帧",
      options: ["A. IP地址", "B. MAC地址", "C. 端口号", "D. 域名"],
      answer: "B",
      explanation: "交换机工作在数据链路层，根据MAC地址表转发数据帧。路由器工作在网络层，根据IP地址转发数据包。"
    },
    {
      id: 219,
      question: "路由器根据（）转发数据包",
      options: ["A. MAC地址", "B. IP地址", "C. 端口号", "D. 物理地址"],
      answer: "B",
      explanation: "路由器工作在网络层，根据路由表和IP地址进行数据包转发。交换机根据MAC地址转发。"
    },
    {
      id: 220,
      question: "在Wireshark抓包分析中，筛选HTTP流量的显示过滤器是（）",
      options: ["A. ip.addr==192.168.1.1", "B. tcp.port==80", "C. http", "D. dns"],
      answer: "C",
      explanation: "Wireshark中使用'http'作为显示过滤器筛选HTTP协议流量。'tcp.port==80'也可以筛选80端口流量，但可能包含非HTTP流量。"
    },
    {
      id: 221,
      question: "在电诈窝点现场取证时，对开机状态的计算机应优先提取（）",
      options: ["A. 硬盘镜像", "B. 内存镜像（RAM dump）", "C. 浏览器书签", "D. 桌面壁纸"],
      answer: "B",
      explanation: "开机状态的计算机中，内存数据（运行进程、密码、网络连接、密钥等）具有易失性，断电即丢失。根据GA/T 756-2021，应优先提取易失性数据。"
    },
    {
      id: 222,
      question: "GOIP设备是一种（）",
      options: ["A. 网络存储设备", "B. 语音网关设备，用于将SIM卡信号转为网络通话", "C. 打印机", "D. 显示器"],
      answer: "B",
      explanation: "GOIP（GSM Over IP）设备是一种语音网关，可插入多张SIM卡，将传统电话信号转换为网络通话（VoIP），常被电信诈骗用于远程拨号。"
    },
    {
      id: 223,
      question: "对GOIP设备进行取证时，重点提取的数据包括（）",
      options: ["A. 仅外壳照片", "B. SIP通话记录、SIM卡信息、配置数据", "C. 仅电源线", "D. 仅包装盒"],
      answer: "B",
      explanation: "GOIP设备取证应提取：SIP通话日志（拨打/接听记录）、插入的SIM卡信息（IMSI、IMEI）、设备配置（远程服务器IP、端口、账号密码）等。"
    },
    {
      id: 224,
      question: "在电诈窝点现场，对手机进行取证时，为防止远程擦除数据，应首先（）",
      options: ["A. 直接开机查看", "B. 开启飞行模式或放入屏蔽袋", "C. 连接充电器", "D. 拍照即可"],
      answer: "B",
      explanation: "手机取证时，应首先开启飞行模式或放入屏蔽袋（Faraday Bag），阻断蜂窝网络、Wi-Fi、蓝牙信号，防止远程擦除指令或自动同步。"
    },
    {
      id: 225,
      question: "现场取证时，使用Write Blocker（只读设备）连接硬盘的主要目的是（）",
      options: ["A. 提高读取速度", "B. 防止对原始存储介质的写操作", "C. 修复坏扇区", "D. 压缩数据"],
      answer: "B",
      explanation: "Write Blocker（硬盘只读锁）通过硬件或软件方式阻止计算机对连接存储介质的写操作，确保原始证据不被修改，是电子取证的标准要求。"
    },
    {
      id: 226,
      question: "在电诈窝点现场勘查中，对路由器进行取证的关键数据包括（）",
      options: ["A. 仅路由器外壳", "B. DHCP客户端列表、DNS日志、端口转发规则", "C. 仅电源适配器", "D. 仅包装盒"],
      answer: "B",
      explanation: "路由器取证关键数据：DHCP客户端列表（连接设备的MAC/IP）、DNS查询日志（访问域名）、端口转发/DMZ规则、VPN配置、系统日志等。"
    },
    {
      id: 227,
      question: "IMEI（国际移动设备识别码）通常存储在手机的（）",
      options: ["A. RAM", "B. ROM", "C. EEPROM", "D. 硬盘"],
      answer: "C",
      explanation: "IMEI存储在EEPROM（电可擦可编程只读存储器）中，属于非易失性存储，断电后数据不丢失，但可以通过特定手段（AT指令）修改。"
    },
    {
      id: 228,
      question: "在现场取证中，对VeraCrypt加密容器进行取证，正确的做法是（）",
      options: ["A. 直接强制断电", "B. 要求嫌疑人提供密码，全程录像记录", "C. 直接删除加密容器", "D. 格式化硬盘"],
      answer: "B",
      explanation: "对于加密容器（VeraCrypt/TrueCrypt/CnCrypt等），应要求嫌疑人提供密码，全程录像记录。不得强行破解或破坏数据，应依法规范取证。"
    },
    {
      id: 229,
      question: "远程勘验取证时，必须记录的内容不包括（）",
      options: ["A. 勘验开始和结束时间", "B. 勘验地点", "C. 勘验人员午餐菜单", "D. 远程系统的IP地址"],
      answer: "C",
      explanation: "远程勘验笔录应记录：勘验时间、地点、目标系统IP地址/域名、操作步骤、提取数据、哈希值等。午餐菜单与勘验无关。"
    },
    {
      id: 230,
      question: "在Linux系统中，查看当前网络连接状态的命令是（）",
      options: ["A. ifconfig", "B. netstat -an", "C. ping", "D. chmod"],
      answer: "B",
      explanation: "netstat -an显示所有网络连接和监听端口。ifconfig查看网络接口配置，ping测试连通性，chmod修改文件权限。"
    },
    {
      id: 231,
      question: "SQLite数据库中，WAL（Write-Ahead Logging）模式的作用是（）",
      options: ["A. 加速数据删除", "B. 在提交前将修改写入日志文件，支持并发读取", "C. 加密数据库", "D. 压缩数据库"],
      answer: "B",
      explanation: "WAL模式将修改先写入WAL日志文件，再批量写入主数据库，支持并发读取，也可以用于恢复已删除或修改前的数据。"
    },
    {
      id: 232,
      question: "iOS系统中，微信聊天记录存储在（）数据库",
      options: ["A. sms.db", "B. MM.sqlite", "C. contacts.db", "D. mmssms.db"],
      answer: "B",
      explanation: "iOS微信数据存储在AppDomain-com.tencent.xin目录下的MM.sqlite数据库中，包含好友、群组、聊天记录等。sms.db是短信数据库。"
    },
    {
      id: 233,
      question: "Android微信的EnMicroMsg.db数据库中，聊天记录存储在（）",
      options: ["A. rconversation表", "B. Chat_开头的表", "C. friend表", "D. SnsInfo表"],
      answer: "B",
      explanation: "Android微信EnMicroMsg.db中，每个聊天对象对应一个Chat_+MD5(UsrName)命名的表，存储消息内容、类型、时间等。rconversation是会话列表，SnsInfo是朋友圈。"
    },
    {
      id: 234,
      question: "iOS备份中，通话记录存储在（）文件",
      options: ["A. sms.db", "B. CallHistory.storedata", "C. Contacts.sqlite", "D. History.db"],
      answer: "B",
      explanation: "iOS通话记录存储在CallHistory.storedata（或CallHistory.db）中，短信在sms.db，联系人在Contacts.sqlite，浏览器历史在History.db。"
    },
    {
      id: 235,
      question: "Android系统中，短信数据通常存储在（）数据库",
      options: ["A. contacts.db", "B. mmssms.db（或telephony.db）", "C. EnMicroMsg.db", "D. CallHistory.db"],
      answer: "B",
      explanation: "Android短信数据传统存储在mmssms.db中，新版Android系统可能使用telephony.db。EnMicroMsg.db是微信数据库，contacts.db是通讯录。"
    },
    {
      id: 236,
      question: "Chrome浏览器的书签数据存储在（）文件",
      options: ["A. History", "B. Bookmarks", "C. Cookies", "D. Login Data"],
      answer: "B",
      explanation: "Chrome书签存储在Bookmarks文件（JSON格式）和Bookmarks.bak（备份）中。History是历史记录，Cookies是Cookie，Login Data是密码。"
    },
    {
      id: 237,
      question: "Firefox浏览器的历史记录存储在（）数据库",
      options: ["A. History", "B. places.sqlite", "C. WebCacheV01.dat", "D. index.dat"],
      answer: "B",
      explanation: "Firefox使用places.sqlite数据库存储历史记录和书签。Chrome使用History（SQLite），IE使用WebCacheV01.dat或index.dat。"
    },
    {
      id: 238,
      question: "Windows系统中，最近访问文档列表存储在注册表的（）位置",
      options: ["A. HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RecentDocs", "B. HKEY_LOCAL_MACHINE\\SYSTEM", "C. HKEY_CLASSES_ROOT", "D. HKEY_USERS"],
      answer: "A",
      explanation: "RecentDocs注册表项记录用户最近访问的文档列表。Jump Lists（快速访问列表）也存储在类似位置。"
    },
    {
      id: 239,
      question: "Windows系统中，USB设备使用记录（首次和最后使用时间）存储在注册表的（）",
      options: ["A. HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR", "B. HKEY_CURRENT_USER", "C. HKEY_CLASSES_ROOT", "D. HKEY_USERS"],
      answer: "A",
      explanation: "USBSTOR注册表项记录了USB存储设备的插拔历史，包括设备序列号、首次使用时间、最后使用时间、友好名称等关键取证信息。"
    },
    {
      id: 240,
      question: "Prefetch文件中记录的程序运行次数存储在（）",
      options: ["A. 文件名的哈希值", "B. 文件内容的偏移量0x90处", "C. 文件扩展名", "D. 文件大小"],
      answer: "B",
      explanation: "Prefetch文件（.pf）中，运行次数通常存储在文件偏移0x90处（4字节），运行时间戳存储在偏移0x80处（8字节×8个时间槽）。"
    },
    {
      id: 241,
      question: "Windows系统中，BitLocker恢复密钥通常保存在（）",
      options: ["A. C:\\Windows\\System32", "B. Microsoft账户云端、Active Directory或USB闪存盘", "C. 回收站", "D. 临时文件夹"],
      answer: "B",
      explanation: "BitLocker恢复密钥可以保存在：用户的Microsoft账户云端、企业的Active Directory、USB闪存盘或打印出来。取证时可尝试从这些位置获取。"
    },
    {
      id: 242,
      question: "FileVault2是（）操作系统内置的磁盘加密功能",
      options: ["A. Windows", "B. macOS", "C. Linux", "D. Android"],
      answer: "B",
      explanation: "FileVault2是macOS内置的全磁盘加密功能，使用XTS-AES-128加密。Windows对应BitLocker，Linux对应LUKS/dm-crypt。"
    },
    {
      id: 243,
      question: "LUKS（Linux Unified Key Setup）是（）平台的磁盘加密标准",
      options: ["A. Windows", "B. macOS", "C. Linux", "D. iOS"],
      answer: "C",
      explanation: "LUKS是Linux平台的磁盘加密标准，使用dm-crypt作为后端。Windows使用BitLocker，macOS使用FileVault2。"
    },
    {
      id: 244,
      question: "在取证中，如果嫌疑人使用了全盘加密且拒绝提供密码，（）",
      options: ["A. 可以直接强制破解", "B. 可以尝试从内存镜像中提取密钥", "C. 必须放弃取证", "D. 直接格式化硬盘"],
      answer: "B",
      explanation: "如果系统开机时进行了全盘加密，密钥可能存在于内存中。通过内存取证（如使用Volatility分析内存镜像），有可能提取BitLocker/LUKS/FileVault2的密钥。"
    },
    {
      id: 245,
      question: "AES-256加密算法的密钥长度是（）位",
      options: ["A. 128", "B. 192", "C. 256", "D. 512"],
      answer: "C",
      explanation: "AES-256使用256位（32字节）的密钥。AES-128使用128位密钥，AES-192使用192位密钥。密钥长度越长，安全性越高。"
    },
    {
      id: 246,
      question: "RSA是一种（）加密算法",
      options: ["A. 对称加密", "B. 非对称加密（公钥加密）", "C. 哈希算法", "D. 流加密"],
      answer: "B",
      explanation: "RSA是非对称加密算法，使用公钥加密、私钥解密。AES是对称加密算法（同一密钥加密解密）。MD5/SHA是哈希算法。"
    },
    {
      id: 247,
      question: "在电子取证中，提取加密密钥的合法途径不包括（）",
      options: ["A. 嫌疑人自愿提供密码", "B. 从内存镜像中提取", "C. 从密钥备份文件中获取", "D. 对嫌疑人刑讯逼供"],
      answer: "D",
      explanation: "任何形式的刑讯逼供都是非法的。合法途径包括：嫌疑人自愿提供、从内存镜像提取、从密钥备份文件获取、通过司法程序要求提供等。"
    },
    {
      id: 248,
      question: "VeraCrypt隐藏加密卷（Hidden Volume）的特点是（）",
      options: ["A. 可以被任何人轻易发现", "B. 在外层加密卷内创建，无法通过常规方式检测", "C. 不需要密码", "D. 只能存储文本文件"],
      answer: "B",
      explanation: "VeraCrypt隐藏卷在外层加密卷（decoy volume）的可用空间内创建，具有 plausible deniability（合理否认性），无法通过查看容器文件大小或常规方式检测其存在。"
    },
    {
      id: 249,
      question: "Windows系统中，用户登录密码的哈希（NTLM hash）存储在（）",
      options: ["A. C:\\Windows\\System32\\config\\SAM", "B. C:\\Windows\\Temp", "C. 注册表HKEY_CURRENT_USER", "D. C:\\Users"],
      answer: "A",
      explanation: "Windows用户密码的NTLM哈希存储在SAM（Security Accounts Manager）数据库文件中，位于C:\\Windows\\System32\\config\\SAM。SYSTEM文件用于解密SAM。"
    },
    {
      id: 250,
      question: "从内存镜像中提取BitLocker密钥，可以使用Volatility的（）插件",
      options: ["A. pslist", "B. bitlocker", "C. netscan", "D. filescan"],
      answer: "B",
      explanation: "Volatility有专门的bitlocker插件用于从内存镜像中提取BitLocker全卷加密密钥（FVEK）。pslist查看进程，netscan查看网络连接，filescan查看文件对象。"
    },
    {
      id: 251,
      question: "DumpIt是一款（）工具",
      options: ["A. 磁盘镜像工具", "B. 内存镜像获取工具", "C. 反病毒软件", "D. 网络扫描工具"],
      answer: "B",
      explanation: "DumpIt是常用的内存镜像获取工具，可以快速获取Windows系统的物理内存镜像（RAM dump），用于后续的内存取证分析。"
    },
    {
      id: 252,
      question: "在内存镜像中，进程列表可以通过Volatility的（）插件查看",
      options: ["A. pslist", "B. netscan", "C. hivelist", "D. malfind"],
      answer: "A",
      explanation: "Volatility的pslist插件列出内存镜像中所有进程（包括已退出的进程）。netscan查看网络连接，hivelist查看注册表蜂巢，malfind查找可疑内存注入。"
    },
    {
      id: 253,
      question: "Volatility的malfind插件用于（）",
      options: ["A. 查找恶意软件注入的内存区域", "B. 查看网络连接", "C. 查看文件列表", "D. 查看注册表"],
      answer: "A",
      explanation: "malfind（Memory Malware Finder）查找具有RX（读执行）权限的可疑内存区域，常用于发现恶意代码注入、进程镂空（Process Hollowing）等攻击。"
    },
    {
      id: 254,
      question: "在内存取证中，剪贴板内容可以通过Volatility的（）插件提取",
      options: ["A. clipboard", "B. cmdscan", "C. consoles", "D. shimcache"],
      answer: "A",
      explanation: "Volatility的clipboard插件提取内存中的剪贴板内容。cmdscan提取命令提示符历史，consoles提取控制台输出，shimcache提取Application Compatibility Cache。"
    },
    {
      id: 255,
      question: "Windows系统中，页面文件（Pagefile.sys）存储在（）",
      options: ["A. C:\\Windows\\Temp", "B. C:\\pagefile.sys（根目录）", "C. C:\\Users", "D. C:\\Program Files"],
      answer: "B",
      explanation: "Pagefile.sys是Windows的虚拟内存页面文件，通常位于系统根目录（C:\\pagefile.sys），存储内存中换出的数据，可能包含密码、密钥等敏感信息。"
    },
    {
      id: 256,
      question: "休眠文件（Hiberfil.sys）包含的数据是（）",
      options: ["A. 仅硬盘分区表", "B. 系统进入休眠时内存的完整镜像", "C. 仅注册表", "D. 仅浏览器缓存"],
      answer: "B",
      explanation: "Hiberfil.sys是Windows休眠文件，保存系统进入休眠状态时内存的完整内容（压缩后）。是内存取证的重要数据来源，因为即使系统关机，休眠文件仍保留在硬盘上。"
    },
    {
      id: 257,
      question: "Windows注册表蜂巢（Hive）文件存储在（）",
      options: ["A. C:\\Windows\\System32\\config", "B. C:\\Windows\\Temp", "C. C:\\Users", "D. C:\\Program Files"],
      answer: "A",
      explanation: "Windows注册表蜂巢文件（SAM、SYSTEM、SOFTWARE、SECURITY、DEFAULT等）存储在C:\\Windows\\System32\\config目录下。用户蜂巢（NTUSER.DAT）存储在用户目录中。"
    },
    {
      id: 258,
      question: "在内存镜像中，已执行的命令历史可以通过Volatility的（）插件提取",
      options: ["A. cmdscan", "B. pslist", "C. netscan", "D. filescan"],
      answer: "A",
      explanation: "cmdscan插件从内存中提取命令提示符（cmd.exe）的历史命令记录。consoles插件提取控制台输入输出，cmdline提取进程命令行参数。"
    },
    {
      id: 259,
      question: "系统调用（Syscall）在内存取证中的意义是（）",
      options: ["A. 无关紧要", "B. 可以追踪恶意软件的系统级操作", "C. 仅用于性能分析", "D. 仅用于网络调试"],
      answer: "B",
      explanation: "通过分析系统调用（Syscall），可以追踪恶意软件的文件操作、进程创建、网络通信、注册表修改等系统级行为，是行为分析的重要手段。"
    },
    {
      id: 260,
      question: "Linux系统中，/proc目录存储的是（）",
      options: ["A. 普通文件", "B. 进程和系统信息的虚拟文件系统", "C. 用户文档", "D. 日志文件"],
      answer: "B",
      explanation: "/proc是Linux的虚拟文件系统（procfs），提供进程信息（/proc/PID/）、系统状态、内存使用、网络配置等运行时信息。是Linux内存/系统取证的重要数据来源。"
    },
    {
      id: 261,
      question: "PE文件（Portable Executable）是（）平台的可执行文件格式",
      options: ["A. Linux", "B. Windows", "C. macOS", "D. Android"],
      answer: "B",
      explanation: "PE是Windows平台的可执行文件格式（.exe、.dll、.sys）。Linux使用ELF格式，macOS使用Mach-O格式，Android使用DEX/APK格式。"
    },
    {
      id: 262,
      question: "PE文件头的Magic Number是（）",
      options: ["A. 'PK'", "B. 'MZ'", "C. 'ELF'", "D. '#!'"],
      answer: "B",
      explanation: "PE文件以'MZ'（0x4D5A）开头，这是DOS头（IMAGE_DOS_HEADER）的签名。'PK'是ZIP签名，'ELF'是Linux可执行文件签名，'#!'是脚本文件签名。"
    },
    {
      id: 263,
      question: "UPX是一款（）工具",
      options: ["A. 压缩工具，常用于压缩/加壳可执行文件", "B. 杀毒软件", "C. 磁盘清理工具", "D. 网络防火墙"],
      answer: "A",
      explanation: "UPX（Ultimate Packer for eXecutables）是可执行文件压缩/加壳工具，常被恶意软件用于压缩体积和逃避特征检测。取证时需脱壳（unpack）后分析。"
    },
    {
      id: 264,
      question: "PE文件中的Import Address Table（IAT）记录了（）",
      options: ["A. 文件大小", "B. 程序导入的外部API函数", "C. 文件创建时间", "D. 文件版本号"],
      answer: "B",
      explanation: "IAT（导入地址表）记录了程序调用的外部DLL函数（如kernel32.dll、user32.dll中的API）。通过分析IAT可以了解程序的功能（如网络通信、文件操作、注册表修改）。"
    },
    {
      id: 265,
      question: "C2（Command and Control）服务器在恶意软件中的作用是（）",
      options: ["A. 提供杀毒服务", "B. 接收恶意软件回传数据并下发指令", "C. 清理系统垃圾", "D. 加速网络访问"],
      answer: "B",
      explanation: "C2（命令与控制）服务器是攻击者用来控制僵尸网络、接收窃取数据、下发新指令的远程服务器。恶意软件通常通过DNS、HTTP、IRC等协议与C2通信。"
    },
    {
      id: 266,
      question: "DGA（Domain Generation Algorithm）的主要目的是（）",
      options: ["A. 加速域名解析", "B. 生成大量随机域名以逃避域名黑名单检测", "C. 提供CDN服务", "D. 加密DNS查询"],
      answer: "B",
      explanation: "DGA是恶意软件使用的技术，通过算法生成大量伪随机域名，其中少数是真实的C2服务器域名。这样可以逃避基于静态域名黑名单的检测。"
    },
    {
      id: 267,
      question: "Rootkit是一种（）",
      options: ["A. 系统优化工具", "B. 隐藏自身和恶意软件存在的工具", "C. 杀毒软件", "D. 压缩工具"],
      answer: "B",
      explanation: "Rootkit通过修改操作系统内核、驱动、系统调用等方式，隐藏恶意进程、文件、注册表项和网络连接，使恶意软件难以被发现。"
    },
    {
      id: 268,
      question: "Sysinternals工具套件中，Autoruns的作用是（）",
      options: ["A. 自动运行病毒", "B. 查看和管理开机自启动项", "C. 自动清理注册表", "D. 自动备份文件"],
      answer: "B",
      explanation: "Autoruns是Sysinternals工具，全面显示Windows系统中所有开机自启动项（注册表、计划任务、服务、WMI等），是恶意软件持久化分析的重要工具。"
    },
    {
      id: 269,
      question: "YARA规则用于（）",
      options: ["A. 网络抓包", "B. 恶意软件分类和检测", "C. 磁盘分区", "D. 内存压缩"],
      answer: "B",
      explanation: "YARA是一种恶意软件分类和检测工具，通过编写规则（基于字符串、二进制模式、逻辑条件）来识别和分类恶意软件家族。"
    },
    {
      id: 270,
      question: "沙箱（Sandbox）在恶意软件分析中的主要作用是（）",
      options: ["A. 加速程序运行", "B. 在隔离环境中运行可疑程序，观察其行为", "C. 压缩恶意软件", "D. 加密恶意软件"],
      answer: "B",
      explanation: "沙箱在隔离环境中运行可疑程序，监控其文件操作、注册表修改、网络通信、API调用等行为，判断是否为恶意软件。常见沙箱有Cuckoo、Any.Run等。"
    },
    {
      id: 271,
      question: "Windows安全日志中，事件ID 4625表示（）",
      options: ["A. 成功登录", "B. 登录失败", "C. 账户被锁定", "D. 策略更改"],
      answer: "B",
      explanation: "4625表示登录失败（Failed logon attempt）。4624表示成功登录，4740表示账户被锁定，4719表示系统审计策略更改。"
    },
    {
      id: 272,
      question: "Windows安全日志中，事件ID 4648表示（）",
      options: ["A. 显式凭据登录（使用RunAs等）", "B. 成功登录", "C. 登录失败", "D. 注销"],
      answer: "A",
      explanation: "4648表示显式凭据登录（A logon was attempted using explicit credentials），通常与RunAs、计划任务、网络共享映射等操作相关。"
    },
    {
      id: 273,
      question: "Windows系统中，AppCompatCache（ShimCache）记录了（）",
      options: ["A. 应用程序兼容性信息，包括程序路径和首次运行时间", "B. 仅桌面壁纸", "C. 仅鼠标设置", "D. 仅网络配置"],
      answer: "A",
      explanation: "ShimCache（AppCompatCache）是Windows应用兼容性缓存，记录了程序执行路径、首次运行时间、最后运行时间等，即使程序已删除，记录仍可能保留。"
    },
    {
      id: 274,
      question: "Windows系统中，Amcache.hve文件记录了（）",
      options: ["A. 应用程序安装和执行信息", "B. 仅系统字体", "C. 仅屏幕分辨率", "D. 仅电源设置"],
      answer: "A",
      explanation: "Amcache.hve（Application Compatibility Hive）记录了Windows 8+系统中应用程序的安装信息、执行路径、首次运行时间、文件哈希等，是程序执行痕迹分析的重要数据源。"
    },
    {
      id: 275,
      question: "Linux系统中，/var/log/auth.log记录的是（）",
      options: ["A. 系统启动日志", "B. 认证和授权日志（登录、sudo等）", "C. 仅打印队列", "D. 仅邮件日志"],
      answer: "B",
      explanation: "auth.log（或secure.log）记录Linux系统的认证和授权事件，包括用户登录（成功/失败）、sudo命令使用、SSH连接等。"
    },
    {
      id: 276,
      question: "Windows系统中，系统日志（System Log）通常记录（）",
      options: ["A. 用户登录", "B. 系统组件、驱动、服务产生的事件", "C. 仅Word文档打开", "D. 仅Excel表格修改"],
      answer: "B",
      explanation: "System Log记录系统组件（驱动、服务、硬件等）产生的事件。Security Log记录安全事件（登录、策略等）。Application Log记录应用程序事件。"
    },
    {
      id: 277,
      question: "IIS服务器的访问日志默认存储在（）",
      options: ["A. C:\\Windows\\System32\\winevt\\Logs", "B. C:\\inetpub\\logs\\LogFiles", "C. C:\\Windows\\Temp", "D. C:\\Users"],
      answer: "B",
      explanation: "IIS（Internet Information Services）访问日志默认存储在C:\\inetpub\\logs\\LogFiles目录下，按站点和日期组织。Apache日志通常在安装目录的logs文件夹中。"
    },
    {
      id: 278,
      question: "Windows系统中，LastVisitedMRU记录了（）",
      options: ["A. 用户最近访问的文件夹路径", "B. 仅桌面图标", "C. 仅屏幕保护程序", "D. 仅壁纸"],
      answer: "A",
      explanation: "LastVisitedMRU（Most Recently Used）注册表项记录了用户通过文件对话框最近访问的文件夹路径，是用户行为分析的重要痕迹。"
    },
    {
      id: 279,
      question: "Linux系统中，last命令显示的信息来自（）文件",
      options: ["A. /var/log/syslog", "B. /var/log/wtmp", "C. /var/log/auth.log", "D. /var/log/messages"],
      answer: "B",
      explanation: "last命令读取/var/log/wtmp（二进制格式）显示用户登录历史。/var/log/btmp记录失败的登录尝试。syslog和messages是系统日志。"
    },
    {
      id: 280,
      question: "Windows事件日志（.evtx格式）中，每条事件记录包含的字段不包括（）",
      options: ["A. 事件ID", "B. 时间戳", "C. 事件级别", "D. 用户银行卡密码"],
      answer: "D",
      explanation: "Windows事件日志记录包含事件ID、时间戳、事件级别、来源、类别、计算机名、用户信息等，绝不会包含银行卡密码等敏感隐私数据。"
    },
    {
      id: 281,
      question: "在恶意软件分析中，熵值（Entropy）分析的主要目的是（）",
      options: ["A. 压缩文件", "B. 检测加密或压缩的数据段", "C. 修复损坏文件", "D. 删除病毒"],
      answer: "B",
      explanation: "熵值分析通过计算数据段的随机性（Shannon熵），检测加密或压缩的代码段（熵值接近8表示高随机性，可能为加密壳或加密数据）。是PE分析和内存取证的重要手段。"
    },
    {
      id: 282,
      question: "Windows系统中，SRUM（System Resource Usage Monitor）数据库记录了（）",
      options: ["A. 仅桌面壁纸", "B. 应用程序的网络使用、用户交互和资源消耗", "C. 仅鼠标设置", "D. 仅电源计划"],
      answer: "B",
      explanation: "SRUM是Windows 8+的系统资源使用监控数据库，位于C:\\Windows\\System32\\sru\\SRUDB.dat，记录每个应用的网络流量、用户交互时间、前台运行时间、CPU/能耗等。是用户行为分析的重要数据源。"
    },
    {
      id: 283,
      question: "iOS系统中，Health数据库（healthdb.sqlite）存储了（）",
      options: ["A. 仅系统字体", "B. 用户的健康与运动数据（步数、心率、睡眠等）", "C. 仅壁纸", "D. 仅铃声"],
      answer: "B",
      explanation: "iOS Health应用使用healthdb.sqlite存储用户的健康数据，包括步数、距离、心率、睡眠、体重、运动记录等。是智能手表/手环与手机同步健康数据的集中存储点。"
    },
    {
      id: 284,
      question: "Android系统中，CallLog数据库存储了（）",
      options: ["A. 仅短信", "B. 通话记录（来电、去电、未接）", "C. 仅微信", "D. 仅浏览器历史"],
      answer: "B",
      explanation: "Android CallLog数据库（或通话记录Provider）存储通话记录，包括来电、去电、未接电话的号码、时间、时长、类型等。通常需要权限android.permission.READ_CALL_LOG。"
    },
    {
      id: 285,
      question: "在取证中分析浏览器下载记录时，Chrome的下载历史存储在（）",
      options: ["A. History数据库", "B. 独立的Downloads表", "C. Bookmarks文件", "D. Cookies数据库"],
      answer: "B",
      explanation: "Chrome的下载历史存储在History数据库的downloads和downloads_url_chains表中，包含下载URL、本地文件路径、文件大小、开始/结束时间、下载状态等。"
    },
    {
      id: 286,
      question: "Windows系统中，LNK文件（快捷方式）中不包含的信息是（）",
      options: ["A. 目标文件路径", "B. 创建时间", "C. 目标文件内容", "D. 访问次数"],
      answer: "C",
      explanation: "LNK文件（Shell Link）记录目标文件路径、访问时间、创建时间、修改时间、文件大小、访问次数、卷标和序列号、MAC地址等元数据，但不包含目标文件的实际内容。"
    },
    {
      id: 287,
      question: "在内存取证中，Volatility的dumpfiles插件用于（）",
      options: ["A. 仅查看进程列表", "B. 从内存中提取文件对象", "C. 仅查看网络连接", "D. 仅查看注册表"],
      answer: "B",
      explanation: "dumpfiles插件从内存镜像中提取文件对象（包括缓存的文件、内存映射文件、已删除但仍存在于内存中的文件），可以恢复恶意软件释放的文件、文档缓存等。"
    },
    {
      id: 288,
      question: "网络取证中，NetFlow数据主要记录了（）",
      options: ["A. 仅域名", "B. 网络流的元数据（源/目的IP、端口、协议、字节数、时间）", "C. 仅邮件内容", "D. 仅文件内容"],
      answer: "B",
      explanation: "NetFlow/sFlow/IPFIX是网络流量元数据记录技术，记录流的五元组（源IP、目的IP、源端口、目的端口、协议）、字节数、包数、时间戳等，但不记录实际数据包内容。"
    },
    {
      id: 289,
      question: "在电子数据取证中，证据镜像的完整性校验应在（）进行",
      options: ["A. 仅制作镜像前", "B. 制作镜像时和验证时", "C. 仅制作镜像后", "D. 无需校验"],
      answer: "B",
      explanation: "取证标准要求在制作镜像时计算哈希值（确保复制过程无错误），在分析前再次验证镜像哈希（确保存储和传输过程中未被篡改）。双重校验是证据链完整性的要求。"
    },
    {
      id: 290,
      question: "Windows系统中，$Recycle.Bin（回收站）的命名规则基于（）",
      options: ["A. 仅文件名", "B. 用户的SID（安全标识符）", "C. 仅扩展名", "D. 仅文件大小"],
      answer: "B",
      explanation: "Windows Vista+的回收站目录为$Recycle.Bin，每个用户有以SID命名的子目录（如S-1-5-21-...），存储该用户删除的文件。通过SID可以关联到具体用户账户。"
    },
    {
      id: 291,
      question: "NTFS文件系统中，Slack空间是指（）",
      options: ["A. 未使用的簇", "B. 文件最后一个簇中未使用的部分", "C. 已删除文件的空间", "D. 系统保留空间"],
      answer: "B",
      explanation: "Slack空间（File Slack）是文件最后一个簇中，文件实际数据结束到簇结束之间的未使用空间。旧文件的数据可能残留在此，是重要的取证信息来源。"
    },
    {
      id: 292,
      question: "NTFS文件系统中，未分配空间（Unallocated Space）是指（）",
      options: ["A. 已分配给文件但尚未使用的空间", "B. 未分配给任何文件或目录的簇", "C. 系统保留区域", "D. MFT区域"],
      answer: "B",
      explanation: "未分配空间是文件系统中未分配给任何文件或目录的簇。已删除文件的数据可能残留在此，直到被新文件覆盖。数据恢复主要在此区域搜索。"
    },
    {
      id: 293,
      question: "文件雕刻（File Carving）技术主要用于（）",
      options: ["A. 压缩文件", "B. 在未分配空间中根据文件签名恢复已删除文件", "C. 加密文件", "D. 修改文件权限"],
      answer: "B",
      explanation: "文件雕刻技术通过扫描存储介质，根据文件头签名（Magic Number）和文件尾特征，在未分配空间、Slack空间等区域恢复已删除或损坏的文件。"
    },
    {
      id: 294,
      question: "JPEG图片文件的文件头签名是（）",
      options: ["A. 'PK' (0x50 0x4B)", "B. 'FF D8'", "C. '89 50 4E 47'", "D. '47 49 46 38'"],
      answer: "B",
      explanation: "JPEG文件以FF D8（SOI标记）开头，FF D9（EOI标记）结尾。'PK'是ZIP/APK，'89 50 4E 47'是PNG，'47 49 46 38'是GIF。"
    },
    {
      id: 295,
      question: "PNG图片文件的文件头签名是（）",
      options: ["A. 'FF D8'", "B. '89 50 4E 47'", "C. 'PK'", "D. '25 50 44 46'"],
      answer: "B",
      explanation: "PNG文件以89 50 4E 47（.PNG）开头。FF D8是JPEG，PK是ZIP，25 50 44 46是PDF。"
    },
    {
      id: 296,
      question: "PDF文件的文件头签名是（）",
      options: ["A. 'FF D8'", "B. '%PDF' (0x25 0x50 0x44 0x46)", "C. 'PK'", "D. '89 50'"],
      answer: "B",
      explanation: "PDF文件以%PDF开头（十六进制25 50 44 46）。FF D8是JPEG，PK是ZIP/APK，89 50是PNG。"
    },
    {
      id: 297,
      question: "NTFS文件系统中，$BadClus文件的作用是（）",
      options: ["A. 存储坏簇信息", "B. 存储用户文件", "C. 存储日志", "D. 存储引导代码"],
      answer: "A",
      explanation: "$BadClus（Bad Clusters）是NTFS元数据文件，记录磁盘上的坏簇（Bad Sectors）信息，防止系统向这些损坏的区域写入数据。"
    },
    {
      id: 298,
      question: "exFAT文件系统相比FAT32的主要改进是（）",
      options: ["A. 仅支持更小的文件", "B. 支持更大的单个文件（超过4GB）和更大的分区", "C. 仅支持更少的文件", "D. 仅支持更小的分区"],
      answer: "B",
      explanation: "exFAT（Extended FAT）支持单个文件最大16EB（exabytes），分区最大128PB，远超FAT32的4GB文件限制。适合用于大容量闪存设备。"
    },
    {
      id: 299,
      question: "RAID1（镜像）的磁盘利用率是（）",
      options: ["A. 100%", "B. 50%", "C. 33%", "D. 75%"],
      answer: "B",
      explanation: "RAID1将数据完整复制到两块硬盘，磁盘利用率为50%（N块硬盘，总容量为单块硬盘容量）。RAID0为100%，RAID5为(N-1)/N。"
    },
    {
      id: 300,
      question: "RAID5至少需要（）块硬盘",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: "B",
      explanation: "RAID5采用分布式奇偶校验，至少需要3块硬盘（2块数据+1块校验）。RAID0需要2块，RAID1需要2块，RAID6需要4块。"
    },
    {
      id: 301,
      question: "ELA（Error Level Analysis）用于（）",
      options: ["A. 压缩图片", "B. 检测图片是否被编辑修改过", "C. 转换图片格式", "D. 调整图片亮度"],
      answer: "B",
      explanation: "ELA（错误级别分析）通过重新压缩图片并比较差异，检测图片中是否有过被编辑后重新保存的区域（编辑区域与原始区域的错误级别不同）。"
    },
    {
      id: 302,
      question: "数字照片中，GPS坐标信息通常存储在（）",
      options: ["A. 文件扩展名", "B. EXIF的GPSInfo标签中", "C. 文件名", "D. 文件大小"],
      answer: "B",
      explanation: "GPS坐标存储在EXIF元数据的GPSInfo IFD中，包括经纬度、海拔、方向等。通过工具（如ExifTool）可以提取。注意：部分平台上传图片时会自动删除GPS。"
    },
    {
      id: 303,
      question: "通过分析图片的噪声模式（Noise Pattern），可以（）",
      options: ["A. 压缩图片", "B. 判断图片是否由特定相机拍摄", "C. 转换格式", "D. 调整分辨率"],
      answer: "B",
      explanation: "每部相机的传感器有独特的噪声模式（Photo Response Non-Uniformity, PRNU），如同指纹。通过分析噪声模式，可以判断图片是否由特定相机拍摄（相机指纹识别）。"
    },
    {
      id: 304,
      question: "视频取证中，关键帧（I-frame）的作用是（）",
      options: ["A. 仅用于音频同步", "B. 独立编码的完整帧，是视频编辑和恢复的参考点", "C. 仅用于字幕显示", "D. 仅用于文件头"],
      answer: "B",
      explanation: "I-frame（Intra-coded frame）是视频压缩中的关键帧，独立编码不依赖其他帧，包含完整的图像信息。P-frame和B-frame依赖I-frame进行解码。视频恢复时优先提取I-frame。"
    },
    {
      id: 305,
      question: "FFmpeg是一款（）工具",
      options: ["A. 图片编辑", "B. 音视频处理（转换、提取、分析）", "C. 文本编辑", "D. 数据库管理"],
      answer: "B",
      explanation: "FFmpeg是开源的音视频处理框架，支持格式转换、流媒体处理、帧提取、元数据分析等。取证中常用于从视频中提取帧、分析编码格式。"
    },
    {
      id: 306,
      question: "视频文件的元数据（Metadata）通常包含（）",
      options: ["A. 仅文件大小", "B. 编码格式、分辨率、时长、创建时间等", "C. 仅文件名", "D. 仅扩展名"],
      answer: "B",
      explanation: "视频元数据包含编码格式（H.264/H.265/VP9等）、分辨率、帧率、时长、码率、创建/修改时间、设备型号等。FFmpeg或ExifTool可以提取。"
    },
    {
      id: 307,
      question: "音频取证中，声纹识别的原理是基于（）",
      options: ["A. 音频文件大小", "B. 人声的独特声学特征", "C. 音频文件名", "D. 音频时长"],
      answer: "B",
      explanation: "声纹识别基于人声的生物特征（频率、共振峰、基音、语速等），每个人的声道结构独特，形成可识别的'声纹'。用于电话录音的身份鉴定。"
    },
    {
      id: 308,
      question: "CCTV录像（DVR/NVR）取证时，通常需要的操作是（）",
      options: ["A. 直接拔掉电源", "B. 提取硬盘并制作镜像，避免直接操作DVR系统", "C. 仅拍照", "D. 仅记录型号"],
      answer: "B",
      explanation: "DVR/NVR取证应提取硬盘制作镜像，避免直接操作系统导致数据覆盖。DVR系统通常有覆盖机制，直接操作可能触发数据删除。"
    },
    {
      id: 309,
      question: "深度伪造（Deepfake）检测技术主要基于（）",
      options: ["A. 仅文件大小", "B. 分析视频中的不自然特征（眨眼、光照、面部边界等）", "C. 仅文件名", "D. 仅分辨率"],
      answer: "B",
      explanation: "Deepfake检测通过分析视频中不自然的特征：不正常的眨眼频率、不一致的光照、面部边界模糊、压缩伪影、眼睛反光不一致等。AI生成的内容可能有特定的指纹特征。"
    },
    {
      id: 310,
      question: "图片取证中，克隆检测（Clone Detection）用于发现（）",
      options: ["A. 图片是否被压缩", "B. 图片中复制-粘贴的篡改区域", "C. 图片是否被裁剪", "D. 图片格式转换"],
      answer: "B",
      explanation: "克隆检测（Copy-Move Detection）通过寻找图片中高度相似或完全相同的区域，发现被复制-粘贴篡改的部分（如移除物体、复制印章等）。"
    },
    {
      id: 311,
      question: "物联网（IoT）设备取证时，常见的通信协议包括（）",
      options: ["A. 仅HTTP", "B. MQTT、CoAP、Zigbee、Wi-Fi等", "C. 仅FTP", "D. 仅SMTP"],
      answer: "B",
      explanation: "IoT设备常用通信协议：MQTT（消息队列遥测传输）、CoAP（受限应用协议）、Zigbee（低功耗无线）、蓝牙、Wi-Fi等。取证时需分析这些协议的通信数据。"
    },
    {
      id: 312,
      question: "无人机（UAV）取证时，可以提取的数据包括（）",
      options: ["A. 仅外壳颜色", "B. 飞行日志、GPS轨迹、照片/视频、遥控器配对信息", "C. 仅螺旋桨数量", "D. 仅重量"],
      answer: "B",
      explanation: "无人机取证可提取：飞行日志（飞行路径、高度、速度、时间）、GPS轨迹、拍摄的照片/视频、遥控器配对信息、固件版本、用户账户等。"
    },
    {
      id: 313,
      question: "智能手表/手环取证时，主要数据源包括（）",
      options: ["A. 仅表带材质", "B. 设备本身存储、配对手机APP、云端同步数据", "C. 仅表盘大小", "D. 仅电池容量"],
      answer: "B",
      explanation: "智能手表取证数据源：设备本地存储（SQLite数据库）、配对手机APP数据（健康数据、通知、位置）、云端同步数据（账户、历史记录）、蓝牙通信日志等。"
    },
    {
      id: 314,
      question: "车载系统（IVI）取证时，可以提取的信息包括（）",
      options: ["A. 仅轮胎气压", "B. 导航历史、蓝牙配对记录、通话记录、USB连接记录", "C. 仅车漆颜色", "D. 仅发动机型号"],
      answer: "B",
      explanation: "车载信息娱乐系统（IVI）取证可提取：导航历史（目的地、路径）、蓝牙配对记录、通话记录、USB设备连接记录、媒体播放历史、系统日志等。"
    },
    {
      id: 315,
      question: "电子数据取证中，关联分析（Link Analysis）的主要目的是（）",
      options: ["A. 压缩数据", "B. 发现不同数据之间的关联关系（通信、财务、位置等）", "C. 删除数据", "D. 加密数据"],
      answer: "B",
      explanation: "关联分析通过分析通信记录、交易流水、位置轨迹、社交关系等多源数据，构建数据之间的关联网络，发现嫌疑人、同伙、资金流向等关键线索。"
    },
    {
      id: 316,
      question: "数字货币（如比特币）取证时，追踪交易的关键信息是（）",
      options: ["A. 仅钱包颜色", "B. 钱包地址、交易哈希、区块链记录", "C. 仅钱包大小", "D. 仅钱包材质"],
      answer: "B",
      explanation: "比特币交易记录在公开的区块链上，通过钱包地址、交易哈希（TxID）、输入/输出地址分析，可以追踪资金流向。但地址与真实身份的关联需要额外信息（如交易所KYC记录）。"
    },
    {
      id: 317,
      question: "在暗网（Dark Web）取证中，Tor网络的特征是（）",
      options: ["A. 完全公开透明", "B. 通过多层加密和节点中继隐藏通信来源和目的地", "C. 仅用于合法网站", "D. 仅用于视频流"],
      answer: "B",
      explanation: "Tor（The Onion Router）通过三层加密和全球志愿者中继节点网络，隐藏用户的IP地址和通信目的地，被广泛用于暗网访问。取证时需分析Tor入口/出口节点日志。"
    },
    {
      id: 318,
      question: "社交工程（Social Engineering）攻击在电子取证中的证据通常包括（）",
      options: ["A. 仅硬件损坏", "B. 钓鱼邮件、伪造网站、聊天记录、通话录音", "C. 仅电源故障", "D. 仅网络断线"],
      answer: "B",
      explanation: "社交工程攻击的证据包括：钓鱼邮件（头信息、发送服务器）、伪造网站（域名注册、服务器IP）、聊天记录（诱导话术）、通话录音（冒充身份）等。"
    },
    {
      id: 319,
      question: "电子数据取证中，证据保管链（Chain of Custody）的核心要求是（）",
      options: ["A. 仅记录文件名", "B. 记录谁、何时、何地、为何、如何接触证据，确保证据不被篡改", "C. 仅记录文件大小", "D. 仅记录创建时间"],
      answer: "B",
      explanation: "证据保管链要求详细记录：谁接触证据、何时、何地、为何目的、进行了何种操作。确保电子数据从收集到呈堂的全过程中未被篡改，是证据合法性的基础。"
    },
    {
      id: 320,
      question: "电子物证实验室应具备的基本条件包括（）",
      options: ["A. 仅需要一台电脑", "B. 只读设备、写保护环境、专业取证软件、防静电措施、监控记录", "C. 仅需要网络", "D. 仅需要照明"],
      answer: "B",
      explanation: "电子物证实验室应具备：只读设备/写保护环境、专业取证软件（EnCase/FTK/X-Ways等）、防静电措施（防静电手环、地垫）、恒温恒湿环境、监控录像、访问控制等。"
    }  ],
  multiple: [
    {
      id: 51,
      question: "电子数据取证的基本原则包括（）",
      options: ["A. 合法性原则", "B. 及时性原则", "C. 完整性原则", "D. 原始性原则"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子数据取证的核心原则包括：合法性原则（依法取证、程序合规）、及时性原则（快速响应防止数据灭失）、完整性原则（不破坏原始数据）、原始性原则（优先使用原始证据）。"
    },
    {
      id: 52,
      question: "电子证据的特性包括（）",
      options: ["A. 电子化数字性", "B. 脆弱性", "C. 人机交互性", "D. 多态性"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子证据的特性包括：电子化数字性（以二进制形式存在）、脆弱性（易被修改删除）、人机交互性（反映操作者行为）、潜在性（需技术方法提取）、多态性（多种存在形态）。"
    },
    {
      id: 53,
      question: "在电子数据取证中常用的哈希算法包括（）",
      options: ["A. MD5", "B. SHA-1", "C. SHA-256", "D. CRC32"],
      answer: ["A", "B", "C"],
      explanation: "MD5、SHA-1和SHA-256是电子数据取证中常用的哈希算法，用于数据完整性校验。CRC32是错误检测码，不是加密哈希算法，不用于取证校验。"
    },
    {
      id: 54,
      question: "常见的硬盘镜像格式包括（）",
      options: ["A. DD", "B. E01", "C. AFF", "D. DOC"],
      answer: ["A", "B", "C"],
      explanation: "DD（原始镜像）、E01（EnCase格式）、AFF（高级取证格式）是常见的硬盘镜像格式。DOC是Word文档格式，不是镜像格式。"
    },
    {
      id: 55,
      question: "手机取证可以获取的信息包括（）",
      options: ["A. 通讯录", "B. 短信和通话记录", "C. 位置信息", "D. 多媒体文件"],
      answer: ["A", "B", "C", "D"],
      explanation: "手机取证可以获取：通讯录、短信、通话记录、位置信息（GPS、Wi-Fi、基站）、多媒体文件（图片、视频、音频）、APP数据、浏览器历史、系统日志等。"
    },
    {
      id: 56,
      question: "Windows系统痕迹分析可以获取的信息包括（）",
      options: ["A. USB设备使用记录", "B. 应用程序运行痕迹", "C. 用户最近访问记录", "D. 回收站删除记录"],
      answer: ["A", "B", "C", "D"],
      explanation: "Windows系统痕迹分析可以获取：USB设备使用记录（注册表USBSTOR）、程序运行痕迹（Prefetch、UserAssist）、最近访问记录（Jump Lists、Recent）、回收站删除记录等。"
    },
    {
      id: 57,
      question: "电子物证检验的主要类型包括（）",
      options: ["A. 电子信息内容检验", "B. 电子信息真实性检验", "C. 硬件和软件性能检验", "D. 同一认定检验"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子物证检验的四大类型：电子信息内容检验（搜寻文件、恢复删除数据）、真实性检验（判断是否被篡改）、硬件软件性能检验、同一认定检验（比对来源）。"
    },
    {
      id: 58,
      question: "数据恢复技术可以恢复的数据包括（）",
      options: ["A. 被直接删除的数据", "B. 少量覆盖删除的数据", "C. 格式化后的数据", "D. 被多次覆盖的数据"],
      answer: ["A", "B", "C"],
      explanation: "数据恢复可以恢复被直接删除、少量覆盖、格式化后的数据。但被多次覆盖的数据（尤其是使用安全擦除工具）通常无法恢复。固态硬盘由于主控的磨损均衡机制，恢复难度更大。"
    },
    {
      id: 59,
      question: "Windows系统日志类型包括（）",
      options: ["A. 系统日志（System）", "B. 安全日志（Security）", "C. 应用程序日志（Application）", "D. 转发事件日志（Forwarded Events）"],
      answer: ["A", "B", "C", "D"],
      explanation: "Windows事件查看器包含：系统日志（系统组件事件）、安全日志（登录、策略等安全事件）、应用程序日志（程序运行事件）、转发事件日志（从其他计算机收集的事件）、Setup日志、Forwarded Events等。"
    },
    {
      id: 60,
      question: "电子物证鉴定记录应包括的内容有（）",
      options: ["A. 检验人员操作过程", "B. 软硬件设备操作参数", "C. 检出数据的完整性校验值", "D. 异常数据及原因"],
      answer: ["A", "B", "C", "D"],
      explanation: "根据CNAS认可要求，电子物证鉴定记录应能追溯操作过程，包括：检验人员操作、软硬件参数、哈希校验值、异常数据及原因（如坏道、介质故障等），确保其他鉴定人可以评估和解释数据。"
    },
    {
      id: 61,
      question: "移动终端取证检验方法包括（）",
      options: ["A. 逻辑取证", "B. 物理取证（镜像取证）", "C. 芯片取证", "D. 云取证"],
      answer: ["A", "B", "C", "D"],
      explanation: "移动终端取证方法包括：逻辑取证（通过ADB、iTunes等提取文件系统）、物理取证（制作完整镜像）、芯片取证（拆芯片提取）、云取证（提取云端备份数据）。"
    },
    {
      id: 62,
      question: "常见的文件系统类型包括（）",
      options: ["A. FAT32", "B. NTFS", "C. exFAT", "D. Ext4"],
      answer: ["A", "B", "C", "D"],
      explanation: "FAT32、NTFS、exFAT是Windows常用文件系统，Ext4是Linux常用文件系统。此外还有HFS+（macOS）、APFS（macOS）、ReFS（Windows）等。"
    },
    {
      id: 63,
      question: "电子证据保全的注意事项包括（）",
      options: ["A. 提取方法不能改变物证", "B. 检验人员需经过专业培训", "C. 全面记录相关活动", "D. 对数据进行Hash校验"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子证据保全要求：不修改原始数据、检验人员具备专业资质、全面记录操作过程、计算和保存哈希校验值、使用只读设备、依法进行等。"
    },
    {
      id: 64,
      question: "影响数据恢复成功率的因素包括（）",
      options: ["A. 存储介质类型", "B. 存储原理和格式", "C. 是否被覆盖", "D. 覆盖次数"],
      answer: ["A", "B", "C", "D"],
      explanation: "数据恢复成功率与：存储介质类型（机械硬盘/固态硬盘/Flash）、存储原理和格式（文件系统类型）、是否被覆盖、覆盖次数、损坏程度等密切相关。"
    },
    {
      id: 65,
      question: "电子物证检验工具应具备的功能包括（）",
      options: ["A. 只读接入功能", "B. 镜像制作功能", "C. 数据恢复功能", "D. 哈希校验功能"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子物证检验工具应具备：只读接入（防止篡改）、镜像制作（DD/E01等格式）、数据恢复（删除/格式化恢复）、哈希校验（MD5/SHA-1/SHA-256）、报告生成等功能。"
    },
    {
      id: 66,
      question: "关于哈希值检验在电子取证中的应用，正确的是（）",
      options: ["A. 可验证电子数据的完整性", "B. 可判断两个文件是否相同", "C. 可以追踪证据保管链", "D. 可完全防止数据被篡改"],
      answer: ["A", "B", "C"],
      explanation: "哈希值可用于：验证数据完整性（检测是否被修改）、比对文件同一性、追踪证据保管链各环节。但哈希值本身不能防止数据被篡改，只能检测是否被篡改。"
    },
    {
      id: 67,
      question: "电子数据提取固定的方法包括（）",
      options: ["A. 直接读取文件", "B. 筛选文件", "C. 恢复文件", "D. 克隆存储介质"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子数据提取固定方法包括：直接读取（在相同环境读取）、筛选（按案件需要筛选相关文件）、恢复（恢复删除数据）、克隆（制作完整镜像备份）等。"
    },
    {
      id: 68,
      question: "关于只读设备的正确描述包括（）",
      options: ["A. 防止外部对存储介质的写操作", "B. 确保数据完整性", "C. 可以完全防止固态硬盘主控工作", "D. 是标准取证流程的组成部分"],
      answer: ["A", "B", "D"],
      explanation: "只读设备可阻止外部写操作、确保数据完整性，是标准取证流程的一部分。但只读设备无法阻止固态硬盘内部主控的自主工作（如垃圾回收、磨损均衡）。"
    },
    {
      id: 69,
      question: "关于镜像文件的正确描述包括（）",
      options: ["A. E01镜像支持压缩和完整性校验", "B. DD镜像是原始位对位复制", "C. 镜像制作后需要计算哈希值", "D. 镜像可以替代原始检材用于分析"],
      answer: ["A", "B", "C", "D"],
      explanation: "E01支持压缩和校验，DD是原始位复制，镜像制作后必须计算哈希值，在标准流程中镜像可用于分析而原始检材封存。这些都是镜像文件的基本特性。"
    },
    {
      id: 70,
      question: "电子证据同一认定检验的内容包括（）",
      options: ["A. 软件源程序比较", "B. 数字影像与嫌疑照相机比对", "C. 声音比对", "D. 人像比对"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子证据同一认定包括：软件源程序比较（判断是否同一软件）、数字影像与相机比对（EXIF信息、传感器噪声等）、声音比对（声纹鉴定）、人像比对（人脸识别）等。"
    }
,
    {
      id: 151,
      question: "《电子数据规定》中规定的电子数据包括但不限于（）",
      options: ["A. 网页、博客、微博等网络平台发布的信息", "B. 手机短信、电子邮件、即时通信等通信信息", "C. 用户注册信息、电子交易记录、登录日志等", "D. 文档、图片、音视频、计算机程序等电子文件"],
      answer: ["A", "B", "C", "D"],
      explanation: "《关于办理刑事案件收集提取和审查判断电子数据若干问题的规定》第一条明确列举了电子数据的各种形式，包括网络信息、通信信息、用户注册信息、日志信息、电子文件等。"
    },
    {
      id: 152,
      question: "保护电子数据完整性的方法包括（）",
      options: ["A. 扣押、封存原始存储介质", "B. 计算电子数据完整性校验值", "C. 制作电子数据备份", "D. 对收集提取过程进行录像"],
      answer: ["A", "B", "C", "D"],
      explanation: "《电子数据规定》第五条要求采取多种方法保护电子数据完整性：扣押封存、计算校验值、制作备份、冻结数据、录像等。"
    },
    {
      id: 153,
      question: "收集提取电子数据时，应当附有的材料包括（）",
      options: ["A. 笔录", "B. 清单", "C. 侦查人员签名", "D. 持有人（提供人）签名或盖章"],
      answer: ["A", "B", "C", "D"],
      explanation: "《电子数据规定》第二十四条要求收集提取电子数据应附有笔录、清单，并经侦查人员、电子数据持有人（提供人）、见证人签名或盖章。"
    },
    {
      id: 154,
      question: "以下属于电子数据取证相关国家标准的包括（）",
      options: ["A. GB/T 29360-2012 电子物证数据恢复检验规程", "B. GB/T 29361-2012 电子物证文件一致性检验规程", "C. GB/T 29362-2012 电子物证数据搜索检验规程", "D. GB/T 31500-2015 存储介质数据恢复服务要求"],
      answer: ["A", "B", "C", "D"],
      explanation: "这些都是我国已发布的电子数据取证相关国家标准，分别规定了数据恢复、文件一致性检验、数据搜索和服务要求。"
    },
    {
      id: 155,
      question: "Chrome浏览器中存储用户数据的主要SQLite数据库包括（）",
      options: ["A. History（历史记录）", "B. Cookies（Cookie信息）", "C. Login Data（保存的密码）", "D. Bookmarks（书签）"],
      answer: ["A", "B", "C", "D"],
      explanation: "Chrome使用多个SQLite数据库存储用户数据：History存储历史记录，Cookies存储Cookie，Login Data存储密码，Bookmarks（或Bookmarks.bak）存储书签。"
    },
    {
      id: 156,
      question: "iOS备份中可以提取的关键数据包括（）",
      options: ["A. 短信（sms.db）", "B. 联系人（Contacts.sqlite）", "C. 通话记录（CallHistory.storedata）", "D. 微信数据（MM.sqlite）"],
      answer: ["A", "B", "C", "D"],
      explanation: "iOS备份（iTunes备份）包含丰富的数据：短信sms.db、联系人Contacts.sqlite、通话记录CallHistory.storedata、微信MM.sqlite等，均以SQLite或plist格式存储。"
    },
    {
      id: 157,
      question: "恶意代码分析的常用工具包括（）",
      options: ["A. IDA Pro（反汇编）", "B. JADX（APK反编译）", "C. Process Monitor（进程监控）", "D. Volatility（内存分析）"],
      answer: ["A", "B", "C", "D"],
      explanation: "恶意代码分析工具包括：IDA Pro（静态反汇编）、JADX（Android反编译）、Process Monitor（动态行为监控）、Volatility（内存取证）、Wireshark（网络分析）等。"
    },
    {
      id: 158,
      question: "NTFS文件系统中属于元数据文件的包括（）",
      options: ["A. $MFT（主文件表）", "B. $LogFile（日志文件）", "C. $Bitmap（簇位图）", "D. $UsnJrnl（更新序列号日志）"],
      answer: ["A", "B", "C", "D"],
      explanation: "NTFS文件系统使用多个元数据文件管理文件系统：$MFT存储所有文件记录，$LogFile记录事务日志，$Bitmap记录簇分配状态，$UsnJrnl记录文件变更日志。"
    },
    {
      id: 159,
      question: "电子数据取证中的时间戳信息包括（）",
      options: ["A. 创建时间（Creation Time）", "B. 修改时间（Modification Time）", "C. 访问时间（Access Time）", "D. MFT记录修改时间（Entry Modified Time）"],
      answer: ["A", "B", "C", "D"],
      explanation: "NTFS文件系统的时间戳MACE包括：M（Modification，修改时间）、A（Access，访问时间）、C（Creation，创建时间）、E（MFT Entry modified time，记录修改时间）。"
    },
    {
      id: 160,
      question: "以下属于易失性数据（Volatile Data）的包括（）",
      options: ["A. 内存中的进程列表", "B. 网络连接状态", "C. 剪贴板内容", "D. 已登录用户的密码"],
      answer: ["A", "B", "C", "D"],
      explanation: "易失性数据在断电后会丢失，包括：内存中的进程、网络连接、剪贴板、RAM中的密码、注册表当前值、未保存的文档等。硬盘数据属于非易失性数据。"
    },
    {
      id: 161,
      question: "SQLite数据库删除数据恢复可以依据的包括（）",
      options: ["A. 空闲页（Free pages）", "B. 未分配空间（Unallocated space）", "C. 已删除的B-tree页", "D. 日志文件（WAL/SHM）"],
      answer: ["A", "B", "C", "D"],
      explanation: "SQLite删除数据恢复来源：空闲页（被标记为空闲但数据仍在）、未分配空间（页面内未使用的空间）、已删除的B-tree页、WAL日志文件（预写日志）中的旧版本数据。"
    },
    {
      id: 162,
      question: "Windows系统中常见的取证分析数据源包括（）",
      options: ["A. 注册表（Registry）", "B. 预读取文件（Prefetch）", "C. 跳转列表（Jump Lists）", "D. 缩略图缓存（Thumbs.db）"],
      answer: ["A", "B", "C", "D"],
      explanation: "Windows系统痕迹分析：注册表（系统配置、USB记录）、Prefetch（程序运行记录）、Jump Lists（最近访问文件）、Thumbs.db（图片缩略图）、Event Log（系统日志）等。"
    },
    {
      id: 163,
      question: "浏览器取证可以获取的信息包括（）",
      options: ["A. 历史记录（History）", "B. 缓存文件（Cache）", "C. Cookie信息", "D. 下载记录（Downloads）"],
      answer: ["A", "B", "C", "D"],
      explanation: "浏览器取证可以获取：历史记录（访问过的URL）、缓存（网页内容副本）、Cookie（网站偏好和登录信息）、下载记录、表单数据、书签、自动填充密码等。"
    },
    {
      id: 164,
      question: "电子邮件头信息中通常包含的字段包括（）",
      options: ["A. From（发件人）", "B. To（收件人）", "C. Subject（主题）", "D. Received（传输路径）"],
      answer: ["A", "B", "C", "D"],
      explanation: "邮件头包含：From（发件人地址）、To（收件人地址）、Subject（主题）、Date（发送时间）、Received（各服务器接收记录）、Message-ID（唯一标识）、MIME-Version等。"
    },
    {
      id: 165,
      question: "以下属于加密磁盘/分区取证工具的包括（）",
      options: ["A. BitLocker（Windows内置）", "B. VeraCrypt/TrueCrypt", "C. FileVault2（macOS）", "D. LUKS（Linux）"],
      answer: ["A", "B", "C", "D"],
      explanation: "这些都是常见的磁盘加密工具：BitLocker（Windows）、VeraCrypt/TrueCrypt（跨平台）、FileVault2（macOS）、LUKS（Linux统一密钥设置）。取证时获取密码或密钥后可解密。"
    },
    {
      id: 166,
      question: "内存取证（RAM Forensics）可以获取的信息包括（）",
      options: ["A. 正在运行的进程列表", "B. 网络连接和端口", "C. 系统剪贴板内容", "D. 已登录用户的密码和密钥"],
      answer: ["A", "B", "C", "D"],
      explanation: "内存取证可提取：进程列表、网络连接、剪贴板内容、注册表、加载的DLL、内存中的密码/密钥、未保存的文档内容、恶意代码驻留痕迹等。"
    },
    {
      id: 167,
      question: "手机取证中可通过APK静态分析获取的信息包括（）",
      options: ["A. 声明的权限（Permissions）", "B. 字符串资源（Strings）", "C. URL地址和IP地址", "D. 入口Activity和Service组件"],
      answer: ["A", "B", "C", "D"],
      explanation: "APK静态分析：AndroidManifest.xml获取权限和组件声明，classes.dex反编译获取字符串、URL/IP、API调用、入口函数、恶意行为特征等。"
    },
    {
      id: 168,
      question: "Windows系统中Prefetch文件的作用包括（）",
      options: ["A. 加快程序启动速度", "B. 记录程序运行时间和次数", "C. 记录程序加载的DLL文件", "D. 记录程序执行路径"],
      answer: ["A", "B", "C", "D"],
      explanation: "Prefetch是Windows预读取机制，用于加快程序启动。同时记录了程序运行时间、运行次数、加载的DLL文件路径、执行路径等，是取证分析的重要数据源。"
    },
    {
      id: 169,
      question: "以下属于网络远程取证措施的是（）",
      options: ["A. 网络在线提取", "B. 远程勘验", "C. 调取第三方数据", "D. 冻结电子数据"],
      answer: ["A", "B", "C", "D"],
      explanation: "《电子数据规定》规定的网络远程取证措施包括：网络在线提取（从网络获取数据）、远程勘验（远程勘验系统）、调取（从第三方调取）、冻结（防止数据被篡改）。"
    },
    {
      id: 170,
      question: "电子数据鉴定人出庭作证时应当（）",
      options: ["A. 客观陈述鉴定过程", "B. 解释鉴定方法和依据", "C. 回答控辩双方的质询", "D. 遵守法庭纪律和职业道德"],
      answer: ["A", "B", "C", "D"],
      explanation: "根据《电子数据规定》第二十六条，鉴定人出庭应客观陈述、解释方法、回答质询，遵守法庭纪律。无正当理由拒不出庭的，鉴定意见不得作为定案根据。"
    },
    {
      id: 321,
      question: "《电子数据规定》中，电子数据的收集提取措施包括（）",
      options: ["A. 扣押、封存原始存储介质", "B. 现场提取", "C. 网络在线提取", "D. 技术侦查措施"],
      answer: ["A", "B", "C", "D"],
      explanation: "《电子数据规定》规定的收集提取措施包括：扣押封存、现场提取、网络在线提取、远程勘验、调取、冻结、检查等。技术侦查措施在特定条件下也可以收集电子数据。"
    },
    {
      id: 322,
      question: "电子数据完整性校验的方法包括（）",
      options: ["A. 计算哈希值（MD5/SHA-1/SHA-256）", "B. 与备份数据比较", "C. 审查原始存储介质的扣押封存状态", "D. 查看收集提取过程的录像"],
      answer: ["A", "B", "C", "D"],
      explanation: "《电子数据规定》第二十三条规定：验证电子数据完整性可通过：审查扣押封存状态、审查收集提取过程、比对哈希值、与备份比较、审查冻结后的访问日志等。"
    },
    {
      id: 323,
      question: "在电诈窝点现场取证时，应当注意的事项包括（）",
      options: ["A. 开启手机飞行模式或放入屏蔽袋", "B. 优先提取易失性数据", "C. 对现场进行录像和拍照", "D. 记录所有操作步骤"],
      answer: ["A", "B", "C", "D"],
      explanation: "电诈窝点现场取证：防止远程擦除（飞行模式/屏蔽袋）、优先提取易失性数据（内存、进程）、现场录像拍照、全程记录操作、使用只读设备、计算哈希值等。"
    },
    {
      id: 324,
      question: "GOIP设备取证时可以提取的关键信息包括（）",
      options: ["A. SIP通话日志", "B. 插入的SIM卡IMSI/ICCID", "C. 设备配置（远程服务器IP、端口）", "D. 设备固件版本"],
      answer: ["A", "B", "C", "D"],
      explanation: "GOIP设备取证：SIP通话日志（拨打记录、时长）、SIM卡信息（IMSI、ICCID、手机号）、设备配置（C2服务器IP、端口、账号）、固件版本、系统日志等。"
    },
    {
      id: 325,
      question: "Windows系统中，USB设备使用痕迹的证据来源包括（）",
      options: ["A. 注册表USBSTOR", "B. 注册表USB", "C. SetupAPI日志", "D. 事件日志（Event ID 20001/10000）"],
      answer: ["A", "B", "C", "D"],
      explanation: "USB设备痕迹：USBSTOR（设备首次/最后使用时间、序列号）、USB（设备类型、VID/PID）、SetupAPI（设备安装日志）、Event Log（设备插入/移除事件）。"
    },
    {
      id: 326,
      question: "SQLite数据库取证中，已删除数据恢复的来源包括（）",
      options: ["A. 空闲页（Free pages）", "B. 未分配空间（Unallocated space）", "C. WAL日志（-wal文件）", "D. 已删除的B-tree页"],
      answer: ["A", "B", "C", "D"],
      explanation: "SQLite已删除数据恢复：空闲页（标记空闲但数据仍在）、未分配空间（页内碎片）、WAL日志（旧版本数据）、已删除的B-tree页、数据库文件中的残留数据。"
    },
    {
      id: 327,
      question: "Windows系统中，程序执行痕迹的证据来源包括（）",
      options: ["A. Prefetch文件", "B. ShimCache/AppCompatCache", "C. Amcache.hve", "D. UserAssist注册表"],
      answer: ["A", "B", "C", "D"],
      explanation: "程序执行痕迹：Prefetch（运行时间、次数、DLL）、ShimCache（首次运行时间、路径）、Amcache（安装/执行信息、哈希）、UserAssist（GUI程序运行计数）、Jump Lists、RecentApps。"
    },
    {
      id: 328,
      question: "内存取证（RAM Forensics）可以提取的易失性数据包括（）",
      options: ["A. 运行中的进程和线程", "B. 网络连接和端口状态", "C. 内存中的密码和密钥", "D. 未保存的文档内容"],
      answer: ["A", "B", "C", "D"],
      explanation: "内存取证可提取：进程/线程、网络连接（TCP/UDP）、加载的DLL、内存中的密码/密钥、剪贴板、注册表当前值、未保存文档、命令历史、恶意代码驻留等。"
    },
    {
      id: 329,
      question: "恶意软件持久化机制通常包括（）",
      options: ["A. 注册表启动项（Run键）", "B. 计划任务（Scheduled Tasks）", "C. 系统服务（Services）", "D. WMI事件订阅"],
      answer: ["A", "B", "C", "D"],
      explanation: "恶意软件持久化：注册表Run键、计划任务、创建系统服务、WMI事件订阅、启动文件夹、Winlogon Shell劫持、AppInit_DLLs、DLL劫持等。"
    },
    {
      id: 330,
      question: "PE文件分析中，可以用于判断程序功能的信息包括（）",
      options: ["A. Import Address Table（IAT）", "B. 字符串表（String Table）", "C. 资源节（Resource Section）", "D. 导出表（Export Table）"],
      answer: ["A", "B", "C", "D"],
      explanation: "PE分析：IAT（导入API功能）、字符串表（URL、IP、文件名、密钥）、资源节（图标、对话框、配置）、导出表（对外提供功能）、节区表（代码/数据分布）。"
    },
    {
      id: 331,
      question: "Windows事件日志分析中，安全相关的事件ID包括（）",
      options: ["A. 4624（成功登录）", "B. 4625（登录失败）", "C. 4688（进程创建）", "D. 4720（创建用户账户）"],
      answer: ["A", "B", "C", "D"],
      explanation: "关键安全事件ID：4624（成功登录）、4625（登录失败）、4634（注销）、4648（显式凭据登录）、4688（进程创建）、4720（创建用户）、4724（重置密码）、4719（审计策略更改）等。"
    },
    {
      id: 332,
      question: "文件雕刻（File Carving）可以恢复的文件类型包括（）",
      options: ["A. JPEG图片", "B. PNG图片", "C. PDF文档", "D. Office文档"],
      answer: ["A", "B", "C", "D"],
      explanation: "文件雕刻通过文件签名（Magic Number）恢复：JPEG（FF D8）、PNG（89 50 4E 47）、PDF（25 50 44 46）、DOCX（PK）、ZIP（PK）、MP3（ID3）、MP4（ftyp）等。"
    },
    {
      id: 333,
      question: "图片真实性检验的方法包括（）",
      options: ["A. EXIF信息一致性检查", "B. ELA（错误级别分析）", "C. 噪声模式分析（PRNU）", "D. 克隆检测"],
      answer: ["A", "B", "C", "D"],
      explanation: "图片篡改检测：EXIF检查（时间/设备一致性）、ELA（错误级别）、噪声模式（PRNU相机指纹）、克隆检测（复制粘贴）、JPEG量化表分析、光照一致性分析。"
    },
    {
      id: 334,
      question: "电子数据取证中，时间线分析的数据源包括（）",
      options: ["A. 文件系统时间戳（MACE）", "B. 注册表时间戳", "C. 事件日志时间戳", "D. 浏览器历史时间戳"],
      answer: ["A", "B", "C", "D"],
      explanation: "时间线分析数据源：文件系统MACE时间戳、注册表LastWrite时间、Windows Event Log时间、浏览器历史/下载时间、Jump Lists时间、Prefetch时间、USBSTOR时间等。"
    },
    {
      id: 335,
      question: "路由器取证中可以获取的关键信息包括（）",
      options: ["A. DHCP客户端列表（MAC/IP对应）", "B. DNS查询日志", "C. 端口转发/DMZ规则", "D. VPN配置"],
      answer: ["A", "B", "C", "D"],
      explanation: "路由器取证：DHCP列表（连接设备）、DNS日志（访问域名）、端口转发/DMZ（暴露服务）、VPN配置（远程连接）、系统日志、固件配置、WAN连接信息等。"
    },
    {
      id: 336,
      question: "BitLocker加密取证时，恢复密钥可能的存储位置包括（）",
      options: ["A. Microsoft账户云端", "B. Active Directory", "C. USB闪存盘", "D. 打印的纸质副本"],
      answer: ["A", "B", "C", "D"],
      explanation: "BitLocker恢复密钥可存储在：Microsoft账户云端、企业Active Directory、USB闪存盘（保存到文件）、打印的纸质副本。取证时应全面搜索这些位置。"
    },
    {
      id: 337,
      question: "iOS设备取证中，未越狱设备可以提取的数据包括（）",
      options: ["A. iTunes备份数据", "B. iCloud备份数据（需授权）", "C. 应用沙盒数据（部分）", "D. 系统日志（部分）"],
      answer: ["A", "B", "C", "D"],
      explanation: "未越狱iOS设备：iTunes备份（短信、联系人、照片、APP数据）、iCloud备份（需凭证）、部分应用沙盒数据（通过USB文件共享）、崩溃日志、部分诊断数据。"
    },
    {
      id: 338,
      question: "Android设备取证中，ADB（Android Debug Bridge）可以执行的操作包括（）",
      options: ["A. 安装/卸载应用", "B. 提取应用数据（backup）", "C. 查看系统日志（logcat）", "D. 获取屏幕截图"],
      answer: ["A", "B", "C", "D"],
      explanation: "ADB功能：安装/卸载APK、应用数据备份（adb backup）、系统日志（adb logcat）、屏幕截图（adb shell screencap）、文件传输（adb pull/push）、Shell访问等。"
    },
    {
      id: 339,
      question: "电子邮件取证中，可以通过邮件头分析获取的信息包括（）",
      options: ["A. 发送服务器IP地址", "B. 邮件经过的中转服务器路径", "C. 发送时间戳", "D. 使用的邮件客户端软件"],
      answer: ["A", "B", "C", "D"],
      explanation: "邮件头分析：Received字段（中转服务器IP和时间）、From/To/Subject、Date、Message-ID、X-Mailer（客户端软件）、MIME版本、SPF/DKIM/DMARC验证信息等。"
    },
    {
      id: 340,
      question: "电子物证实验室建设要求包括（）",
      options: ["A. 只读设备（Write Blocker）", "B. 防静电措施", "C. 监控录像系统", "D. 访问控制制度"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子物证实验室：只读设备/写保护、防静电措施（手环/地垫）、监控录像、访问控制、恒温恒湿、专业取证软件（EnCase/FTK/X-Ways）、无尘环境、网络安全隔离等。"
    },
    {
      id: 341,
      question: "Windows系统中，用户最近访问文档的痕迹来源包括（）",
      options: ["A. RecentDocs注册表", "B. Jump Lists", "C. LastVisitedMRU", "D. OpenSavePidlMRU"],
      answer: ["A", "B", "C", "D"],
      explanation: "用户文档访问痕迹：RecentDocs（最近文档）、Jump Lists（任务栏快速访问）、LastVisitedMRU（文件对话框访问路径）、OpenSavePidlMRU（打开/保存对话框）、Office最近文件等。"
    },
    {
      id: 342,
      question: "Linux系统中，常见的系统日志文件包括（）",
      options: ["A. /var/log/syslog（或messages）", "B. /var/log/auth.log（或secure）", "C. /var/log/wtmp", "D. /var/log/btmp"],
      answer: ["A", "B", "C", "D"],
      explanation: "Linux日志：syslog（系统日志）、auth.log（认证日志）、wtmp（登录历史）、btmp（失败登录）、lastlog（最后登录）、faillog（登录失败）、apache/nginx访问日志等。"
    },
    {
      id: 343,
      question: "数字签名在电子数据取证中的作用包括（）",
      options: ["A. 验证数据来源", "B. 验证数据完整性", "C. 防止抵赖", "D. 确定签名时间"],
      answer: ["A", "B", "C", "D"],
      explanation: "数字签名作用：身份认证（验证来源）、完整性保护（篡改后签名失效）、不可否认性（签名者无法否认）、时间戳（确定签名时间）。基于公钥密码学。"
    },
    {
      id: 344,
      question: "NTFS文件系统的元数据文件包括（）",
      options: ["A. $MFT", "B. $LogFile", "C. $Bitmap", "D. $Boot"],
      answer: ["A", "B", "C", "D"],
      explanation: "NTFS元数据文件：$MFT（主文件表）、$LogFile（日志）、$Bitmap（簇分配位图）、$Boot（引导扇区）、$BadClus（坏簇）、$UsnJrnl（变更日志）、$Secure（安全描述符）等。"
    },
    {
      id: 345,
      question: "数据恢复时，可以提高成功率的因素包括（）",
      options: ["A. 尽快进行恢复（减少覆盖）", "B. 使用专业恢复工具", "C. 制作只读镜像后分析", "D. 避免在原始介质上操作"],
      answer: ["A", "B", "C", "D"],
      explanation: "提高数据恢复成功率：尽快恢复（减少写入覆盖）、专业工具（R-Studio/PhotoRec等）、制作镜像后分析（不触碰原始介质）、避免通电后继续使用（特别是SSD）、低温环境（机械硬盘）。"
    },
    {
      id: 346,
      question: "RAID磁盘阵列取证中，需要确定的参数包括（）",
      options: ["A. RAID级别（0/1/5/6/10等）", "B. 磁盘顺序", "C. 条带大小（Stripe Size）", "D. 奇偶校验算法"],
      answer: ["A", "B", "C", "D"],
      explanation: "RAID重组需要：RAID级别、磁盘顺序（左右同步/异步）、条带大小（16KB/64KB/128KB等）、奇偶校验分布（左/右）、延迟（Rotation）等。专业工具（如R-Studio）可自动检测。"
    },
    {
      id: 347,
      question: "Cuckoo Sandbox（恶意软件分析沙箱）可以监控的行为包括（）",
      options: ["A. 文件系统操作（创建/修改/删除）", "B. 注册表操作", "C. 网络通信（HTTP/DNS/TCP）", "D. API调用序列"],
      answer: ["A", "B", "C", "D"],
      explanation: "Cuckoo沙箱监控：文件操作、注册表修改、进程/线程创建、API调用、网络通信（HTTP请求、DNS查询、TCP连接）、内存注入、截图、内存转储等。"
    },
    {
      id: 348,
      question: "Windows系统中，远程桌面连接（RDP）的痕迹包括（）",
      options: ["A. Event Log 事件ID 1149（认证成功）", "B. 事件ID 4624（类型10为RDP）", "C. Terminal Services日志", "D. RDP缓存图片（Bitmap Cache）"],
      answer: ["A", "B", "C", "D"],
      explanation: "RDP痕迹：Event Log 1149（远程桌面认证成功）、4624（登录类型10为RDP）、Terminal Services日志、RDP Bitmap Cache（缓存的屏幕图像）、注册表（MruXCID）、跳转列表。"
    },
    {
      id: 349,
      question: "在暗网（Tor网络）取证中，可能的证据来源包括（）",
      options: ["A. Tor浏览器本地缓存和历史", "B. Tor入口/出口节点日志", "C. 暗网站点服务器镜像", "D. 比特币交易记录"],
      answer: ["A", "B", "C", "D"],
      explanation: "暗网取证：Tor浏览器本地数据（书签、缓存、历史）、入口/出口节点日志（部分可见）、暗网服务器镜像（执法行动缴获）、比特币/门罗币交易链（区块链分析）、邮件服务商记录。"
    },
    {
      id: 350,
      question: "电子数据取证中，报告应当包含的内容包括（）",
      options: ["A. 委托方和鉴定机构信息", "B. 检材信息和鉴定过程", "C. 鉴定意见和分析说明", "D. 附件（截图、哈希值等）"],
      answer: ["A", "B", "C", "D"],
      explanation: "电子数据鉴定报告：委托方/机构信息、检材描述、鉴定依据（标准/规范）、鉴定过程、分析说明、鉴定意见、附件（截图、哈希值、文件清单、时间线等）、鉴定人签名和资质。"
    },
    {
      id: 351,
      question: "电子数据提取固定时，常用的镜像格式包括（）",
      options: ["A. DD/RAW（原始镜像）", "B. E01（EnCase格式）", "C. AFF（高级取证格式）", "D. L01（逻辑证据文件）"],
      answer: ["A", "B", "C", "D"],
      explanation: "取证镜像格式：DD/RAW（位对位复制，无压缩）、E01（压缩、分段、CRC校验）、AFF（开源、压缩、加密）、L01（逻辑证据文件，提取特定文件而非全盘镜像）。"
    },
    {
      id: 352,
      question: "手机取证中，微信数据可能存储的位置包括（）",
      options: ["A. Android: /data/data/com.tencent.mm/MicroMsg/", "B. iOS: AppDomain-com.tencent.xin/MicroMsg/", "C. PC端微信备份", "D. 云端备份"],
      answer: ["A", "B", "C", "D"],
      explanation: "微信数据存储：Android本地（EnMicroMsg.db）、iOS本地（MM.sqlite）、PC端备份（备份在手机上的文件）、微信云端（部分数据）。需分别取证。"
    },
    {
      id: 353,
      question: "网络流量分析（Network Traffic Analysis）可以获取的信息包括（）",
      options: ["A. 通信双方的IP地址和端口", "B. 通信时间和数据量", "C. 使用的协议（HTTP/HTTPS/DNS等）", "D. 传输的文件内容（未加密时）"],
      answer: ["A", "B", "C", "D"],
      explanation: "网络流量分析：IP/端口（通信双方）、时间戳、数据量、协议类型、DNS查询（域名）、HTTP明文内容、邮件内容、FTP传输、未加密通信内容、TLS证书信息等。"
    },
    {
      id: 354,
      question: "Windows系统中，用户活动痕迹的证据来源包括（）",
      options: ["A. 用户Assist注册表", "B. 跳转列表（Jump Lists）", "C. 缩略图缓存（Thumbs.db）", "D. 回收站（$Recycle.Bin）"],
      answer: ["A", "B", "C", "D"],
      explanation: "用户活动痕迹：UserAssist（GUI程序运行）、Jump Lists（最近文件）、Thumbs.db（浏览过的图片缩略图）、回收站（已删除文件）、RecentDocs（最近文档）、OpenSave dialogs。"
    },
    {
      id: 355,
      question: "恶意软件分析时，静态分析可以获取的信息包括（）",
      options: ["A. 文件哈希（用于查重和威胁情报）", "B. 导入的API函数（判断功能）", "C. 字符串（URL、IP、文件名、密钥）", "D. PE节区信息（代码/数据分布）"],
      answer: ["A", "B", "C", "D"],
      explanation: "静态分析：文件哈希、文件签名、导入表（IAT）、字符串、资源、PE节区、编译时间戳、数字签名、加壳检测、YARA规则匹配、熵值分析（加密/压缩检测）等。"
    },
    {
      id: 356,
      question: "在电子数据取证中，数据关联分析可以关联的数据类型包括（）",
      options: ["A. 通话记录与短信", "B. 银行流水与聊天记录", "C. 位置轨迹与时间点", "D. 社交关系网络"],
      answer: ["A", "B", "C", "D"],
      explanation: "数据关联分析：通信关联（通话-短信-微信）、财务关联（银行流水-支付记录-聊天）、时空关联（位置轨迹-时间线）、社交关联（联系人-群组-通话网络）、设备关联（IMEI-IMSI-手机号）等。"
    },
    {
      id: 357,
      question: "SSD（固态硬盘）取证相比机械硬盘（HDD）的特殊挑战包括（）",
      options: ["A. TRIM命令导致删除数据难以恢复", "B. 磨损均衡（Wear Leveling）导致数据位置不固定", "C. 主控芯片的自主数据调度", "D. 只读设备无法完全防止数据变化"],
      answer: ["A", "B", "C", "D"],
      explanation: "SSD取证挑战：TRIM（立即擦除）、磨损均衡（数据分散）、垃圾回收（后台移动数据）、主控自主调度、只读设备无法阻止内部操作。建议优先镜像，不做过多通电。"
    },
    {
      id: 358,
      question: "网页取证中，可以提取的元数据包括（）",
      options: ["A. 网页服务器类型（Apache/Nginx/IIS）", "B. 网站备案信息", "C. 域名注册信息（WHOIS）", "D. SSL证书信息"],
      answer: ["A", "B", "C", "D"],
      explanation: "网页取证：服务器类型（HTTP头X-Powered-By/Server）、备案信息（ICP）、WHOIS（域名注册人/注册商/时间）、SSL证书（颁发者、有效期、域名）、网站源码、评论、链接等。"
    },
    {
      id: 359,
      question: "云取证（Cloud Forensics）面临的挑战包括（）",
      options: ["A. 数据分布在多个地理位置", "B. 多租户环境的数据隔离", "C. 数据动态迁移和删除", "D. 法律管辖权问题"],
      answer: ["A", "B", "C", "D"],
      explanation: "云取证挑战：分布式存储（跨国数据）、多租户隔离、虚拟化动态迁移、弹性伸缩（数据位置变化）、日志留存策略、法律管辖权、服务提供商配合、加密数据获取等。"
    },
    {
      id: 360,
      question: "电子数据取证工具的验证（Validation）要求包括（）",
      options: ["A. 通过已知数据测试工具准确性", "B. 验证工具版本和哈希", "C. 记录验证过程和结果", "D. 定期重新验证"],
      answer: ["A", "B", "C", "D"],
      explanation: "工具验证：使用已知数据/测试镜像验证输出准确性、验证工具安装包的哈希（防止篡改）、记录验证过程（时间、人员、结果）、定期重新验证（工具更新后）、比对不同工具结果。"
    },
    {
      id: 361,
      question: "区块链电子存证的技术特点包括（）",
      options: ["A. 分布式存储（多节点备份）", "B. 哈希链式结构（不可篡改）", "C. 时间戳服务", "D. 共识机制验证"],
      answer: ["A", "B", "C", "D"],
      explanation: "区块链存证特点：分布式存储（去中心化）、哈希链（ Merkel Tree + 前块哈希，篡改即破坏链）、时间戳（证明存在时间）、共识机制（多节点确认）、智能合约（自动执行）。"
    },
    {
      id: 362,
      question: "iOS系统中，plist文件的作用包括（）",
      options: ["A. 存储应用配置和偏好设置", "B. 存储系统设置", "C. 存储用户账户信息", "D. 作为部分数据库的存储格式"],
      answer: ["A", "B", "C", "D"],
      explanation: "plist（Property List）是iOS/macOS的配置文件格式，存储：应用配置、系统设置、用户信息、账户凭证、Safari历史（History.plist）、书签（Bookmarks.plist）等。可用plutil或专用工具解析。"
    },
    {
      id: 363,
      question: "Android系统中，APK文件的主要组成部分包括（）",
      options: ["A. AndroidManifest.xml（配置）", "B. classes.dex（字节码）", "C. resources.arsc（资源索引）", "D. META-INF（签名信息）"],
      answer: ["A", "B", "C", "D"],
      explanation: "APK结构：AndroidManifest.xml（权限/组件/配置）、classes.dex（Dalvik字节码）、resources.arsc（资源索引）、META-INF（签名CERT.RSA/SF、MANIFEST.MF）、res（资源文件）、lib（原生库）。"
    },
    {
      id: 364,
      question: "Windows系统中，系统还原点（System Restore）相关的文件包括（）",
      options: ["A. 还原点快照（Snapshot）", "B. 注册表备份", "C. 系统文件备份", "D. 用户数据备份"],
      answer: ["A", "B", "C", "D"],
      explanation: "系统还原点包含：系统状态快照、注册表备份（在还原点目录中）、受保护的系统文件副本、部分用户数据（如Windows安装的程序）。存储在System Volume Information中。"
    },
    {
      id: 365,
      question: "电子邮件取证时，邮件客户端数据存储格式包括（）",
      options: ["A. Outlook: PST/OST", "B. Thunderbird: MBOX", "C. Apple Mail: EMLX/MBOX", "D. Windows Mail: EML"],
      answer: ["A", "B", "C", "D"],
      explanation: "邮件客户端格式：Outlook PST/OST、Thunderbird MBOX（无扩展名或.msf）、Apple Mail EMLX（每封邮件一个文件）+ MBOX索引、Windows Mail EML、GMail Takeout MBOX等。"
    },
    {
      id: 366,
      question: "在网络入侵取证中，常见的攻击痕迹包括（）",
      options: ["A. 异常登录日志（时间/地点/IP）", "B. 新增/修改的账户", "C. 恶意文件（WebShell/后门）", "D. 异常网络连接"],
      answer: ["A", "B", "C", "D"],
      explanation: "入侵取证痕迹：异常登录（异地/非工作时间）、新增管理员账户、WebShell（可疑PHP/ASPX文件）、后门程序、异常进程/服务、计划任务、注册表启动项、C2通信、横向移动痕迹。"
    },
    {
      id: 367,
      question: "电子数据跨境取证时，需要考虑的问题包括（）",
      options: ["A. 数据所在司法管辖区的法律", "B. 数据主权和隐私保护", "C. 国际司法协助条约", "D. 云服务提供商的服务协议"],
      answer: ["A", "B", "C", "D"],
      explanation: "跨境取证挑战：数据主权（数据存储国法律）、隐私保护（GDPR等）、国际司法协助（MLAT条约）、云服务条款、证据可采性（不同国家的取证标准）、时效性、数据格式兼容性。"
    },
    {
      id: 368,
      question: "Windows系统中，WMI（Windows Management Instrumentation）在取证中的意义包括（）",
      options: ["A. 恶意软件可能利用WMI实现持久化", "B. WMI事件订阅可以记录系统活动", "C. WMI数据库可以查询系统配置", "D. WMI痕迹可能难以被传统工具检测"],
      answer: ["A", "B", "C", "D"],
      explanation: "WMI取证：恶意软件利用WMI事件订阅（如每隔X分钟执行恶意代码）实现隐蔽持久化；WMI存储库（OBJECTS.DATA）记录系统信息；WMI痕迹传统工具难以检测，需专用工具（如Kansa、WMI Explorer）。"
    },
    {
      id: 369,
      question: "在视频监控（DVR/NVR）取证中，常见的视频编码格式包括（）",
      options: ["A. H.264/AVC", "B. H.265/HEVC", "C. MPEG-4", "D. 专有格式（如DVR厂商自定义格式）"],
      answer: ["A", "B", "C", "D"],
      explanation: "DVR/NVR编码格式：H.264（最常用）、H.265（更高压缩比）、MPEG-4、以及厂商自定义格式（如Hikvision .dav、Dahua .dav）。自定义格式需要厂商播放器或转换工具。"
    },
    {
      id: 370,
      question: "电子数据取证中，证据保全的要点包括（）",
      options: ["A. 使用只读设备防止篡改", "B. 计算哈希值并记录", "C. 制作两份以上镜像（工作镜像+封存镜像）", "D. 记录保全全过程"],
      answer: ["A", "B", "C", "D"],
      explanation: "证据保全：只读连接、哈希校验（原始+镜像）、双镜像（工作镜像分析+封存镜像保管）、全程记录（时间、人员、方法、设备）、环境检测（时间校准、杀毒）、证人见证。"
    }  ],
  judge: [
    {
      id: 71,
      question: "只读设备可以完全防止固态硬盘数据被修改。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "只读设备只能防止外部对存储介质的写操作，无法阻止固态硬盘（SSD）内部主控芯片的自主工作流程（如磨损均衡、垃圾回收、数据调度等），这些内部操作可能导致数据变化。"
    },
    {
      id: 72,
      question: "哈希值相同的两个文件内容一定相同。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "哈希函数具有雪崩效应和唯一性，不同的文件内容几乎不可能产生相同的哈希值（碰撞概率极低）。在电子取证中，哈希值一致可以高度确信两个文件内容相同。"
    },
    {
      id: 73,
      question: "删除后的数据完全无法恢复。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "删除操作通常只是标记空间为可用，数据并未立即被物理清除。在未覆盖的情况下，可以通过数据恢复技术恢复。恢复成功率取决于覆盖情况、存储介质类型等因素。"
    },
    {
      id: 74,
      question: "FAT32文件系统支持单个文件超过4GB。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "FAT32文件系统由于32位簇号的设计限制，单个文件最大只能支持约4GB（4GB减1字节）。需要存储大于4GB的文件应使用NTFS或exFAT文件系统。"
    },
    {
      id: 75,
      question: "电子证据具有脆弱性，容易被修改或删除。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "电子证据以数字形式存在，可以被轻易地修改、删除或复制，且修改可能不留痕迹。这种脆弱性要求在取证过程中必须采取严格措施保护原始证据的完整性。"
    },
    {
      id: 76,
      question: "镜像制作完成后需要计算哈希值以验证完整性。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "制作镜像后计算哈希值是标准取证流程，用于：1) 验证镜像与原始数据一致；2) 后续分析时验证镜像未被修改；3) 建立证据保管链。"
    },
    {
      id: 77,
      question: "手机取证可以直接使用原始检材进行各种分析操作。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "手机取证应遵循不修改原始数据的原则，尽可能通过只读方式或逻辑备份提取数据。直接操作原始检材可能导致数据变化（如系统日志更新、时间戳改变）。"
    },
    {
      id: 78,
      question: "日志分析可以定位攻击者的操作行为。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "日志分析是电子取证的核心手段之一，通过分析系统日志、安全日志、应用日志等，可以追踪攻击者的登录时间、操作命令、访问路径、文件修改等行为。"
    },
    {
      id: 79,
      question: "电子物证鉴定人应具有计算机相关专业本科学历。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "根据CNAS认可准则和相关规范，从事电子物证鉴定的鉴定人应具有计算机科学与技术等相关专业大学本科及以上学历，并具备在电子物证鉴定领域的执业资格。"
    },
    {
      id: 80,
      question: "E01镜像格式支持压缩和完整性校验。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "E01（Expert Witness Format）是EnCase软件创建的镜像格式，支持数据压缩以节省存储空间，内置CRC校验和哈希值验证，确保镜像的完整性。"
    },
    {
      id: 81,
      question: "NTFS文件系统比FAT32更安全。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "NTFS相比FAT32具有更完善的安全特性：支持文件权限（ACL）、加密（EFS）、压缩、磁盘配额、日志恢复（$LogFile）等，安全性显著优于FAT32。"
    },
    {
      id: 82,
      question: "数据恢复成功率与覆盖次数无关。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "数据恢复成功率与覆盖次数密切相关。覆盖次数越多，原始数据被新数据替换的概率越大，恢复成功率越低。一次覆盖就可能导致传统机械硬盘数据无法恢复。"
    },
    {
      id: 83,
      question: "电子证据只读设备可以防外部写操作。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "只读设备（Write Blocker）的核心功能是防止外部设备（如取证计算机）对存储介质进行写操作，确保原始数据在取证过程中不被修改。"
    },
    {
      id: 84,
      question: "APK文件可以通过文件签名分析识别其真实类型。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "APK文件本质上是ZIP压缩包，以'PK'（50 4B）开头。即使将扩展名改为其他名称，通过文件签名分析（检查文件头Magic Number）仍可识别其真实类型。"
    },
    {
      id: 85,
      question: "固态硬盘数据被删除后无法恢复。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "固态硬盘数据删除后并非绝对无法恢复。如果在删除后没有大量写入操作，且主控没有执行TRIM/垃圾回收，仍有可能通过专业工具恢复。但相比机械硬盘，固态硬盘恢复难度更大。"
    },
    {
      id: 86,
      question: "制作镜像时应该选择'按文件复制'以保留更多数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "取证镜像应选择'复制所有扇区'（Bit-by-bit），而非'按文件复制'。按文件复制只能复制有效文件，会丢失已删除数据、未分配空间、Slack空间等关键取证信息。"
    },
    {
      id: 87,
      question: "电子物证检验可以在任意场所进行，不受环境限制。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "电子物证检验场所不像传统物证检验限于实验室，但应在可控环境中进行。现场检验需要便携式设备，实验室检验需要专业环境。并非任意场所都适合。"
    },
    {
      id: 88,
      question: "哈希值可以作为电子数据的'电子指纹'用于验证同一性。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "哈希值是电子数据的唯一特征值，如同指纹一样。不同数据几乎不可能产生相同哈希值，因此可以将哈希值作为电子数据的'电子指纹'，验证其同一性和完整性。"
    },
    {
      id: 89,
      question: "手机取证时不需要使用屏蔽袋，直接开机即可。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "手机取证时应该使用屏蔽袋（Faraday Bag）或屏蔽箱，防止手机连接网络后远程擦除数据、接收远程指令或自动更新。直接开机且未屏蔽信号存在数据灭失风险。"
    },
    {
      id: 90,
      question: "电子数据司法鉴定必须遵循法律程序，符合证据合法性要求。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "电子数据司法鉴定属于司法鉴定活动，必须遵循《司法鉴定程序通则》《刑事诉讼法》等法律规定，确保取证程序合法、证据来源合法，否则证据可能被排除。"
    }
,
    {
      id: 171,
      question: "电子数据是案件发生过程中形成的，以数字化形式存储、处理、传输的，能够证明案件事实的数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "这是《关于办理刑事案件收集提取和审查判断电子数据若干问题的规定》第一条对电子数据的明确定义。"
    },
    {
      id: 172,
      question: "以数字化形式记载的证人证言、被害人陈述以及犯罪嫌疑人供述和辩解等，属于电子数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "《电子数据规定》第一条明确：以数字化形式记载的证人证言、被害人陈述以及犯罪嫌疑人、被告人供述和辩解等证据，不属于电子数据。必要时可以参照适用本规定。"
    },
    {
      id: 173,
      question: "收集、提取电子数据时，应当由二名以上侦查人员进行，且取证方法应当符合相关技术标准。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第七条明确规定：收集、提取电子数据，应当由二名以上侦查人员进行，取证方法应当符合相关技术标准。"
    },
    {
      id: 174,
      question: "电子数据检查可以将电子数据存储介质直接接入检查设备进行检查，无需使用写保护设备。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "《电子数据规定》第十六条要求：电子数据检查应当将电子数据存储介质通过写保护设备接入检查设备；有条件的应当制作备份对备份进行检查。"
    },
    {
      id: 175,
      question: "DNS协议使用UDP 53端口进行域名解析。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "DNS协议主要使用UDP 53端口进行查询，当响应数据包过大或进行区域传送（AXFR）时使用TCP 53端口。"
    },
    {
      id: 176,
      question: "TCP和UDP不可以使用相同的端口号。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "TCP和UDP的端口命名空间是独立的，TCP/8080和UDP/8080可以共存。内核根据IP协议字段（TCP为6，UDP为17）区分后交给各自的协议栈处理。"
    },
    {
      id: 177,
      question: "Chrome浏览器的历史记录文件本质上是SQLite数据库。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Chrome的History、Cookies、Login Data等文件都是SQLite数据库格式，可以使用DB Browser for SQLite等工具直接查看。"
    },
    {
      id: 178,
      question: "iPhone手机越狱后，取证人员可以访问完整的文件系统。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "越狱绕过iOS的沙盒限制，获取root权限，可以访问完整的文件系统，包括系统文件、应用数据和配置信息。"
    },
    {
      id: 179,
      question: "SQLite数据库中被删除的数据无法恢复。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "SQLite删除数据时通常仅标记为空闲页，数据并未立即物理删除。通过解析空闲页、未分配空间和WAL日志，可以恢复大量已删除数据。"
    },
    {
      id: 180,
      question: "DPAPI加密的数据可以在任意计算机上解密。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DPAPI使用与用户账户绑定的密钥（Master Key）加密，解密通常需要在原用户环境下进行，或需要获取Master Key和对应的SID。"
    },
    {
      id: 181,
      question: "Volatility框架是用于分析内存镜像的开源工具。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Volatility是业界著名的开源内存取证分析框架，支持Windows、Linux、MacOS的内存镜像分析，提取进程、网络、注册表等易失性数据。"
    },
    {
      id: 182,
      question: "内存中的数据在断电后仍然可以保留。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "RAM是易失性存储器，断电后数据会立即丢失。内存取证必须在线进行，或在设备通电时通过工具（如DumpIt、Magnet RAM Capture）捕获内存镜像。"
    },
    {
      id: 183,
      question: "IDA Pro是一款反汇编和逆向工程工具。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "IDA Pro（Interactive DisAssembler）是业界标准的反汇编和逆向工程工具，用于分析二进制程序、恶意代码的逻辑结构和行为。"
    },
    {
      id: 184,
      question: "静态分析恶意代码时，需要实际运行程序。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "静态分析不执行程序，通过反汇编、反编译、二进制分析等方式直接检查代码。动态分析才需要在沙箱等受控环境中运行程序。"
    },
    {
      id: 185,
      question: "Windows安全日志中事件ID 4624表示成功登录。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "4624是Windows安全日志中成功登录事件的事件ID。4625表示登录失败，4634表示注销，4647表示用户启动注销。"
    },
    {
      id: 186,
      question: "NTFS的$MFT记录大小通常为1024字节。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "NTFS文件系统中，每个$MFT（主文件表）记录固定为1024字节（1KB），包含文件的元数据属性（如文件名、时间戳、数据运行等）。"
    },
    {
      id: 187,
      question: "FAT32文件系统支持单个文件超过4GB。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "FAT32由于32位簇号的设计限制，单个文件最大只能支持约4GB。超过4GB的文件需要使用NTFS或exFAT文件系统。"
    },
    {
      id: 188,
      question: "EXIF信息可以包含GPS坐标和拍摄设备型号。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "EXIF（Exchangeable Image File Format）元数据包含拍摄设备型号、GPS位置坐标、拍摄时间、光圈、快门速度等丰富信息。"
    },
    {
      id: 189,
      question: "电子邮件中的'Received'字段记录了邮件经过的服务器路径。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Received字段是邮件头中的重要字段，按时间顺序记录了邮件从发送方到接收方经过的每一台邮件服务器的IP地址和时间戳。"
    },
    {
      id: 190,
      question: "区块链存证可以完全替代传统的司法鉴定。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "区块链存证可以提高电子数据的真实性和可追溯性，但不能完全替代司法鉴定。司法鉴定仍需由具备资质的鉴定机构和鉴定人按照法定程序进行。"
    },
    {
      id: 191,
      question: "电子数据检查笔录应当注明检查方法、过程和结果，由有关人员签名或盖章。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第十六条要求电子数据检查应当制作笔录，注明检查方法、过程和结果，由有关人员签名或者盖章。"
    },
    {
      id: 192,
      question: "电子数据系篡改、伪造或无法确定真伪的，不得作为定案的根据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第二十八条明确：电子数据系篡改、伪造或无法确定真伪的，或有增加、删除、修改等情形影响真实性的，不得作为定案的根据。"
    },
    {
      id: 193,
      question: "iOS备份文件默认存储在Windows的C盘iTunes Backup目录下。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "iTunes备份在Windows中的默认路径是C:\\Users\\用户名\\AppData\\Roaming\\Apple Computer\\MobileSync\\Backup，不是C:\\iTunes Backup。"
    },
    {
      id: 194,
      question: "APK文件本质上是一个ZIP压缩包。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "APK（Android Package）文件本质上是以ZIP格式打包的压缩文件，包含AndroidManifest.xml、classes.dex、resources.arsc、META-INF等文件。"
    },
    {
      id: 195,
      question: "PST文件是Outlook使用的个人存储表文件格式。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "PST（Personal Storage Table）是Microsoft Outlook使用的专有文件格式，用于存储邮件、联系人、日历等数据。"
    },
    {
      id: 196,
      question: "易失性数据在断电后会丢失，应优先收集。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "根据取证原则，易失性数据（如内存数据、进程、网络连接）在断电后会丢失，因此开机状态下应优先收集易失性数据，再处理非易失性数据。"
    },
    {
      id: 197,
      question: "网络远程勘验不需要任何法律授权即可进行。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "网络远程勘验属于侦查措施，必须依法进行。远程勘验应当由符合条件的人员进行，并制作笔录，必要时进行录像。"
    },
    {
      id: 198,
      question: "时间线分析是将各种时间戳按顺序排列，重构事件过程。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "时间线分析（Timeline Analysis）是电子数据取证的核心方法，将文件系统时间戳、日志时间、注册表时间等按时间顺序排列，重构用户行为和事件发展过程。"
    },
    {
      id: 199,
      question: "Android手机未ROOT时，可以通过ADB备份提取应用数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Android手机即使未ROOT，通常可以通过ADB（Android Debug Bridge）的backup命令进行应用数据备份，提取应用的数据和配置信息。"
    },
    {
      id: 200,
      question: "电子数据冻结后，任何人都无法访问该数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "电子数据冻结是限制数据被增加、删除、修改，但允许特定人员只读访问。冻结不是完全禁止访问，而是防止数据被篡改。"
    },
    {
      id: 371,
      question: "《电子数据规定》适用于刑事诉讼中电子数据的收集提取和审查判断。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《关于办理刑事案件收集提取和审查判断电子数据若干问题的规定》第一条明确适用于刑事诉讼中电子数据的收集提取和审查判断。"
    },
    {
      id: 372,
      question: "电子数据检查可以使用原始存储介质直接进行检查，无需制作备份。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "《电子数据规定》第十六条要求：有条件的应当制作电子数据备份，对备份进行检查；无法制作备份的，应当注明原因。直接使用原始介质存在风险。"
    },
    {
      id: 373,
      question: "对电子数据涉及的专门性问题难以确定的，应由司法鉴定机构出具鉴定意见。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第十七条规定：对电子数据涉及的专门性问题难以确定的，由司法鉴定机构出具鉴定意见，或者由公安部指定的机构出具报告。"
    },
    {
      id: 374,
      question: "网络远程勘验可以在没有见证人的情况下进行。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "网络远程勘验应当有见证人，或全程录像。没有见证人且未录像的远程勘验，证据可能存在瑕疵。"
    },
    {
      id: 375,
      question: "电子数据系篡改、伪造或无法确定真伪的，不得作为定案的根据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第二十八条明确：电子数据系篡改、伪造或无法确定真伪的，或有增加、删除、修改等情形影响真实性的，不得作为定案的根据。"
    },
    {
      id: 376,
      question: "初查过程中收集、提取的电子数据，可以作为证据使用。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第六条规定：初查过程中收集、提取的电子数据，以及通过网络在线提取的电子数据，可以作为证据使用。"
    },
    {
      id: 377,
      question: "电子数据收集提取时，应当由二名以上侦查人员进行，无需见证人。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "《电子数据规定》第十五条要求：收集提取电子数据应当由符合条件的人员担任见证人。由于客观原因无法由符合条件的人员担任见证人的，应当在笔录中注明情况并对相关活动进行录像。"
    },
    {
      id: 378,
      question: "电子数据冻结后，数据持有人可以完全访问和修改数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "电子数据冻结是限制数据被增加、删除、修改，但允许特定人员只读访问。冻结不是完全禁止访问，而是防止数据被篡改。"
    },
    {
      id: 379,
      question: "鉴定人拒不出庭作证的，鉴定意见不得作为定案的根据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "《电子数据规定》第二十六条：经人民法院通知，鉴定人拒不出庭作证的，鉴定意见不得作为定案的根据。对没有正当理由拒不出庭作证的鉴定人，人民法院应当通报司法行政机关或者有关部门。"
    },
    {
      id: 380,
      question: "电子数据取证必须遵循合法性原则、及时性原则、完整性原则和原始性原则。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "电子数据取证的核心原则包括：合法性（依法取证）、及时性（快速响应防止数据灭失）、完整性（不破坏原始数据）、原始性（优先使用原始证据）。"
    },
    {
      id: 381,
      question: "内存中的数据在断电后会立即丢失。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "RAM是易失性存储器，断电后数据会立即丢失。内存取证必须在线进行，或在设备通电时捕获内存镜像。"
    },
    {
      id: 382,
      question: "Hiberfil.sys文件包含系统休眠时内存的完整镜像。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Hiberfil.sys是Windows休眠文件，保存系统进入休眠状态时内存的完整内容（压缩后）。即使系统关机，休眠文件仍保留在硬盘上，是重要的取证数据来源。"
    },
    {
      id: 383,
      question: "Pagefile.sys是Windows的虚拟内存文件，可能包含敏感数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Pagefile.sys（页面文件）是Windows的虚拟内存交换文件，存储从内存中换出的数据，可能包含密码、密钥、未保存文档等敏感信息，是取证的重要数据来源。"
    },
    {
      id: 384,
      question: "固态硬盘（SSD）的TRIM命令会立即物理擦除已删除数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "TRIM命令告诉SSD哪些数据块不再使用，SSD主控会在后台（垃圾回收时）擦除这些数据。但TRIM不会立即物理擦除，且部分SSD或旧系统可能不支持TRIM。"
    },
    {
      id: 385,
      question: "NTFS文件系统中，已删除文件的数据仍然可能存在于未分配空间中。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "NTFS删除文件时，通常只标记MFT记录为删除、簇位图为未分配，但数据本身通常仍留在磁盘上，直到被新数据覆盖。因此可以在未分配空间中恢复已删除数据。"
    },
    {
      id: 386,
      question: "FAT32文件系统中，删除文件会立即清除文件数据内容。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "FAT32删除文件时，仅在文件分配表（FAT）和目录项中标记为删除（第一个字符改为0xE5），文件数据内容本身仍然保留在数据区，直到被覆盖。"
    },
    {
      id: 387,
      question: "E01镜像格式支持压缩、分段和完整性校验。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "E01（Expert Witness Format）是EnCase创建的镜像格式，支持数据压缩、分段存储（便于大镜像管理）、CRC32校验和MD5/SHA1哈希，是取证行业标准格式。"
    },
    {
      id: 388,
      question: "DD镜像格式是位对位的原始镜像，不支持压缩。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "DD（原始镜像）是Linux dd命令创建的位对位复制，不添加任何元数据，不支持压缩和校验（除非额外计算哈希）。优点是简单、通用，任何工具都可以读取。"
    },
    {
      id: 389,
      question: "SHA-256比MD5更安全，碰撞概率更低。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "SHA-256产生256位哈希值，MD5产生128位。SHA-256的碰撞概率远低于MD5，抗碰撞性更强。目前MD5已被证明存在碰撞漏洞，不推荐用于安全场景。"
    },
    {
      id: 390,
      question: "CRC32可以作为电子数据完整性校验的可靠方法。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "CRC32是循环冗余校验，用于检测随机错误，不是加密哈希。CRC32可以被轻易构造碰撞（故意制造两个不同文件产生相同CRC32），不能用于电子数据取证的完整性校验。应使用MD5/SHA-1/SHA-256。"
    },
    {
      id: 391,
      question: "Windows注册表中USBSTOR项记录了USB存储设备的插拔历史。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "USBSTOR（USB Storage）注册表项记录了系统识别过的USB存储设备，包括设备序列号、友好名称、首次和最后使用时间、设备类型等关键信息。"
    },
    {
      id: 392,
      question: "Prefetch文件在Windows系统中即使程序已删除，运行记录仍可能保留。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Prefetch文件（.pf）在程序执行时创建，记录了程序路径、运行时间、运行次数、加载的DLL等。即使程序本身被删除，Prefetch文件通常仍保留，直到被系统清理（最多128个）。"
    },
    {
      id: 393,
      question: "ShimCache（AppCompatCache）记录了Windows系统中应用程序的首次执行时间。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "ShimCache是Windows应用兼容性缓存，记录了程序执行路径、首次执行时间（Insertion Time）、最后执行时间等，即使程序已删除，记录仍可能保留在注册表中。"
    },
    {
      id: 394,
      question: "Amcache.hve文件在Windows 8及以上系统中记录了应用程序的安装和执行信息。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Amcache.hve（Application Compatibility Hive）是Windows 8+引入的注册表蜂巢文件，记录了应用程序的安装路径、首次运行时间、最后运行时间、文件哈希等详细信息。"
    },
    {
      id: 395,
      question: "Chrome浏览器的历史记录文件本质上是SQLite数据库。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Chrome的History、Cookies、Login Data、Bookmarks等文件本质上都是SQLite数据库，可以使用DB Browser for SQLite等工具直接解析。"
    },
    {
      id: 396,
      question: "Firefox浏览器使用places.sqlite数据库存储历史记录和书签。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Firefox使用places.sqlite（SQLite数据库）存储历史记录、书签、Favicon等信息。Cookie存储在cookies.sqlite（旧版）或SQLite数据库中。"
    },
    {
      id: 397,
      question: "IE浏览器10及以后版本使用WebCacheV01.dat存储历史记录和缓存。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "IE10+使用ESDB（Enhanced Storage Database）格式，历史记录和缓存存储在WebCacheV01.dat中，替代了旧版IE的index.dat格式。"
    },
    {
      id: 398,
      question: "iOS设备越狱后，取证人员可以访问完整的文件系统。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "越狱绕过iOS的沙盒限制，获取root权限，可以访问完整的文件系统，包括系统文件、应用数据、配置信息等。未越狱设备只能访问应用沙盒和备份数据。"
    },
    {
      id: 399,
      question: "Android手机未ROOT时，可以通过ADB备份提取应用数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Android手机即使未ROOT，通常可以通过ADB（Android Debug Bridge）的backup命令进行应用数据备份（adb backup），提取应用的数据和配置信息。"
    },
    {
      id: 400,
      question: "SQLite数据库中被删除的数据无法恢复。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "SQLite删除数据时通常仅标记为空闲页，数据并未立即物理删除。通过解析空闲页、未分配空间和WAL日志，可以恢复大量已删除数据记录。"
    },
    {
      id: 401,
      question: "Ping命令使用ICMP协议测试网络连通性。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Ping使用ICMP（Internet Control Message Protocol）协议的Echo Request（Type 8）和Echo Reply（Type 0）消息来测试目标主机的可达性。"
    },
    {
      id: 402,
      question: "TCP和UDP的端口命名空间是独立的，可以使用相同的端口号。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "TCP和UDP的端口命名空间是独立的，TCP/8080和UDP/8080可以共存。内核根据IP协议字段（TCP为6，UDP为17）区分后交给各自的协议栈处理。"
    },
    {
      id: 403,
      question: "DNS协议使用TCP 53端口进行所有查询。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DNS主要使用UDP 53端口进行查询，当响应数据包过大（超过512字节）或进行区域传送（AXFR）时，才使用TCP 53端口。"
    },
    {
      id: 404,
      question: "ARP协议将IP地址解析为MAC地址。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "ARP（Address Resolution Protocol）根据IP地址获取对应的MAC地址（物理地址）。反向ARP（RARP）将MAC地址解析为IP地址。"
    },
    {
      id: 405,
      question: "SSH使用TCP 22端口，提供加密的远程登录。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "SSH（Secure Shell）使用TCP 22端口，提供加密的远程登录和命令执行。与Telnet（23端口，明文传输）相比，SSH对所有通信进行加密。"
    },
    {
      id: 406,
      question: "Telnet协议传输的数据是加密的。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "Telnet传输明文数据（用户名、密码、命令等均不加密），已被SSH替代。在取证中，如果捕获到Telnet流量，可以直接读取其中的敏感信息。"
    },
    {
      id: 407,
      question: "GOIP设备使用SIP协议进行语音通话的网络传输。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "GOIP（GSM Over IP）设备使用SIP（Session Initiation Protocol）会话初始协议，将传统电话信号转换为网络通话（VoIP），常被电信诈骗用于远程拨号。"
    },
    {
      id: 408,
      question: "UPX是一款恶意软件，用于破坏计算机系统。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "UPX本身是一款合法的可执行文件压缩工具，但被恶意软件作者滥用用于压缩体积和逃避特征检测。UPX不是恶意软件，但常被恶意软件使用。"
    },
    {
      id: 409,
      question: "YARA规则是一种用于恶意软件检测和分类的规则语言。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "YARA是一种开源的恶意软件分类和检测工具，通过编写规则（基于字符串、二进制模式、逻辑条件）来识别和分类恶意软件家族。被广泛用于安全研究和取证。"
    },
    {
      id: 410,
      question: "Rootkit通过修改操作系统内核来隐藏恶意软件的存在。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Rootkit通过修改操作系统内核、驱动、系统调用表、DLL注入等方式，隐藏恶意进程、文件、注册表项和网络连接，使恶意软件难以被传统工具发现。"
    },
    {
      id: 411,
      question: "BitLocker是Windows内置的磁盘加密功能，使用AES算法。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "BitLocker是Windows（Vista+）内置的全磁盘加密功能，使用AES算法（XTS-AES-128或XTS-AES-256）。Win10默认使用XTS-AES-128。"
    },
    {
      id: 412,
      question: "FileVault2是macOS内置的磁盘加密功能。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "FileVault2是macOS（10.7+）内置的全磁盘加密功能，使用XTS-AES-128加密。与Windows的BitLocker、Linux的LUKS功能类似。"
    },
    {
      id: 413,
      question: "LUKS是Linux平台的磁盘加密标准。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "LUKS（Linux Unified Key Setup）是Linux平台的磁盘加密标准，使用dm-crypt作为后端。提供统一的密钥管理和多种加密算法支持。"
    },
    {
      id: 414,
      question: "VeraCrypt的隐藏卷无法通过查看容器文件大小来检测。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "VeraCrypt隐藏卷在外层加密卷（decoy volume）的可用空间内创建，不修改容器文件大小，没有额外的元数据，无法通过常规方式检测其存在。"
    },
    {
      id: 415,
      question: "DPAPI加密的数据可以在任意计算机上解密。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DPAPI（Data Protection API）使用与用户账户绑定的密钥（Master Key）加密，解密通常需要在原用户环境下进行，或需要获取Master Key和对应的SID。"
    },
    {
      id: 416,
      question: "从内存镜像中可以提取BitLocker、FileVault2或LUKS的加密密钥。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "如果系统在开机时解锁了加密卷，密钥可能存在于内存中。通过内存取证（如Volatility的bitlocker插件），可以提取这些全磁盘加密密钥。"
    },
    {
      id: 417,
      question: "Windows用户密码的NTLM哈希存储在SAM数据库中。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Windows用户密码的NTLM哈希存储在SAM（Security Accounts Manager）数据库文件中（C:\\Windows\\System32\\config\\SAM），需要SYSTEM文件中的密钥才能解密。"
    },
    {
      id: 418,
      question: "AES-256的密钥长度是256位，比AES-128更安全。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "AES-256使用256位密钥，比AES-128（128位密钥）提供更高的安全性。虽然AES-128目前仍安全，但AES-256提供更大的安全余量。"
    },
    {
      id: 419,
      question: "RSA是对称加密算法，使用同一密钥进行加密和解密。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "RSA是非对称加密算法（公钥加密），使用公钥加密、私钥解密。AES才是对称加密算法（同一密钥加密解密）。"
    },
    {
      id: 420,
      question: "在取证中，对嫌疑人刑讯逼供获取密码是合法的。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "任何形式的刑讯逼供都是非法的，违反《刑事诉讼法》和《禁止酷刑公约》。合法获取密码的途径包括：自愿提供、内存提取、密钥备份、司法程序要求等。"
    },
    {
      id: 421,
      question: "现场取证时，对手机开启飞行模式可以防止远程擦除数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "飞行模式关闭蜂窝网络、Wi-Fi、蓝牙，阻断远程连接，防止远程擦除指令或自动同步。是手机现场取证的标准操作。"
    },
    {
      id: 422,
      question: "在电诈窝点现场，对开机状态的计算机应优先提取硬盘镜像。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "开机状态的计算机应优先提取易失性数据（内存、进程、网络连接），因为这些数据断电即丢失。硬盘数据是非易失性的，可以在后续提取。"
    },
    {
      id: 423,
      question: "使用Write Blocker（只读设备）连接硬盘，可以完全防止所有数据变化。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "只读设备只能防止外部对存储介质的写操作，无法阻止固态硬盘（SSD）内部主控的自主工作流程（如垃圾回收、磨损均衡），这些内部操作可能导致数据变化。"
    },
    {
      id: 424,
      question: "远程勘验取证时，应当全程录像并记录操作步骤。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "远程勘验应当制作笔录，记录勘验时间、地点、目标、操作步骤、提取数据等，必要时全程录像，确保证据的合法性和可重现性。"
    },
    {
      id: 425,
      question: "证据保管链要求记录谁、何时、何地、为何、如何接触证据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "证据保管链（Chain of Custody）要求详细记录：谁接触证据、何时、何地、为何目的、进行了何种操作。是确保证据未被篡改的关键制度。"
    },
    {
      id: 426,
      question: "在Linux系统中，/var/log目录是标准的系统日志存储位置。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "/var/log是Linux系统的标准日志目录，包含syslog、auth.log、wtmp、btmp、apache访问日志等，是系统取证分析的重要数据来源。"
    },
    {
      id: 427,
      question: "Volatility框架可以分析Windows、Linux和MacOS的内存镜像。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Volatility是开源的内存取证框架，支持Windows（XP-10）、Linux和MacOS的内存镜像分析，提取进程、网络、注册表、密码等易失性数据。"
    },
    {
      id: 428,
      question: "文件雕刻（File Carving）可以根据文件签名在未分配空间中恢复已删除文件。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "文件雕刻技术通过扫描存储介质，根据文件头签名（Magic Number）和文件尾特征，在未分配空间、Slack空间等区域恢复已删除或损坏的文件。"
    },
    {
      id: 429,
      question: "ELA（错误级别分析）可以检测图片是否被编辑修改过。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "ELA通过重新压缩图片并比较差异，检测图片中是否有过被编辑后重新保存的区域。编辑区域与原始区域的错误级别不同，在ELA图像中呈现为高亮区域。"
    },
    {
      id: 430,
      question: "EXIF信息中的GPS坐标可以帮助确定照片的拍摄地点。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "EXIF元数据中的GPSInfo包含经纬度、海拔、方向等，可以精确定位照片的拍摄地点。但部分平台（如微信、微博）上传时会自动删除GPS信息以保护隐私。"
    },
    {
      id: 431,
      question: "区块链存证可以完全替代传统的司法鉴定。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "区块链存证可以提高电子数据的真实性和可追溯性，但不能完全替代司法鉴定。司法鉴定仍需由具备资质的鉴定机构和鉴定人按照法定程序进行。"
    },
    {
      id: 432,
      question: "时间线分析是将各种时间戳按时间顺序排列，重构事件过程。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "时间线分析（Timeline Analysis）是电子数据取证的核心方法，将文件系统时间戳、日志时间、注册表时间等按时间顺序排列，重构用户行为和事件发展过程。"
    },
    {
      id: 433,
      question: "关联分析可以发现通话记录、短信、微信聊天记录之间的关联关系。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "关联分析通过分析多源数据（通话、短信、社交、财务、位置等），构建数据之间的关联网络，发现嫌疑人、同伙、资金流向等关键线索。"
    },
    {
      id: 434,
      question: "DGA（域名生成算法）生成的域名都可以被静态黑名单拦截。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DGA生成大量伪随机域名，其中只有少数是真实C2域名。静态黑名单无法覆盖所有可能的DGA域名，需要动态检测（如NXDOMAIN频率分析、DNS流量分析）来识别。"
    },
    {
      id: 435,
      question: "PE文件中的IAT（导入地址表）可以反映程序的功能。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "IAT记录了程序导入的外部API函数。通过分析IAT可以了解程序的功能：如导入WinInet API可能涉及网络通信，导入Crypt API可能涉及加密操作。"
    },
    {
      id: 436,
      question: "C2服务器是恶意软件用来接收指令和回传数据的服务器。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "C2（Command and Control）服务器是攻击者控制僵尸网络、接收窃取数据、下发新指令的远程服务器。恶意软件通常通过HTTP/HTTPS/DNS等协议与C2通信。"
    },
    {
      id: 437,
      question: "Windows事件日志中，事件ID 4688表示进程创建。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "4688（A new process has been created）表示进程创建事件，记录父进程、子进程、命令行参数等。启用详细进程跟踪策略后可以记录。"
    },
    {
      id: 438,
      question: "RAID0提供数据冗余，一块硬盘损坏不会丢失数据。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "RAID0是条带化存储，没有数据冗余。任何一块硬盘损坏都会导致整个RAID数据丢失。RAID1/5/6/10才提供不同程度的冗余。"
    },
    {
      id: 439,
      question: "RAID5至少需要3块硬盘，可以容忍一块硬盘损坏。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "RAID5采用分布式奇偶校验，至少需要3块硬盘（2块数据+1块校验），可以容忍一块硬盘损坏。数据通过奇偶校验信息可以重建。"
    },
    {
      id: 440,
      question: "H.264和H.265是常见的视频压缩编码标准。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "H.264/AVC和H.265/HEVC是最常见的视频压缩编码标准。H.265在相同画质下压缩率比H.264高约50%，但编码计算量更大。"
    },
    {
      id: 441,
      question: "在视频监控取证中，DVR厂商自定义格式（如.dav）可以直接用通用播放器播放。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DVR厂商自定义格式（如海康威视.dav、大华.dav）通常需要厂商专用播放器或转换工具。通用播放器（如VLC）可能无法直接播放。"
    },
    {
      id: 442,
      question: "深度伪造（Deepfake）视频可以通过分析不自然的眨眼频率来检测。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Deepfake视频常存在不自然的特征：不正常的眨眼频率、不一致的光照、面部边界模糊、压缩伪影、眼睛反光不一致等，可用于检测。"
    },
    {
      id: 443,
      question: "声纹识别可以基于人声的生物特征进行身份鉴定。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "声纹识别基于人声的生物特征（频率、共振峰、基音、语速等），每个人的声道结构独特，形成可识别的'声纹'，可用于电话录音的身份鉴定。"
    },
    {
      id: 444,
      question: "Tor浏览器通过多层加密和全球中继节点隐藏用户IP地址。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Tor（The Onion Router）通过三层加密和全球志愿者中继节点网络（入口节点、中继节点、出口节点），隐藏用户的IP地址和通信目的地。"
    },
    {
      id: 445,
      question: "比特币交易记录在公开的区块链上，可以通过钱包地址追踪资金流向。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "比特币所有交易都记录在公开的区块链上，任何人都可以查看钱包地址之间的交易。但地址与真实身份的关联需要交易所KYC记录等额外信息。"
    },
    {
      id: 446,
      question: "物联网设备取证时，MQTT协议常用于设备间通信。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "MQTT（Message Queuing Telemetry Transport）是物联网常用的轻量级发布/订阅消息协议，用于传感器、智能家居等设备间的通信。取证时需分析MQTT Broker日志。"
    },
    {
      id: 447,
      question: "WMI（Windows Management Instrumentation）可以被恶意软件用于实现持久化。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "恶意软件可以创建WMI事件订阅（如每隔X分钟触发一次），在系统事件发生时执行恶意代码。WMI持久化隐蔽性强，传统工具难以检测。"
    },
    {
      id: 448,
      question: "Autoruns工具可以查看Windows系统中所有开机自启动项。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Autoruns是Sysinternals工具，全面显示Windows系统中所有开机自启动项：注册表Run键、计划任务、服务、WMI事件、AppInit DLLs、Winlogon等。"
    },
    {
      id: 449,
      question: "Process Monitor可以实时监视文件系统、注册表和进程活动。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Process Monitor（Procmon）是Sysinternals工具，实时监视文件系统（创建/读取/修改/删除）、注册表、进程和线程的DLL加载活动，是动态分析的核心工具。"
    },
    {
      id: 450,
      question: "JADX是一款开源的Android APK反编译工具。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "JADX是开源的Android APK反编译工具，可以将.dex文件反编译为Java源代码，用于分析APK程序逻辑、查找恶意代码、提取URL和字符串等。"
    },
    {
      id: 451,
      question: "DumpIt是一款内存镜像获取工具，可以快速捕获Windows内存。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "DumpIt是常用的内存镜像获取工具，由MoonSols开发，可以快速获取Windows系统的物理内存镜像，用于后续内存取证分析。"
    },
    {
      id: 452,
      question: "Pagefile.sys和Hiberfil.sys都是Windows系统文件，可能包含敏感数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Pagefile.sys（虚拟内存）和Hiberfil.sys（休眠文件）都可能包含从内存换出的敏感数据（密码、密钥、文档内容），是取证的重要数据来源。"
    },
    {
      id: 453,
      question: "Linux系统中，/proc目录是虚拟文件系统，提供进程和系统信息。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "/proc是Linux的虚拟文件系统（procfs），提供进程信息（/proc/PID/）、系统状态、内存使用、网络配置、CPU信息等运行时信息。"
    },
    {
      id: 454,
      question: "iOS备份文件默认存储在Windows用户的AppData目录中。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "iTunes备份在Windows中默认存储在C:\\Users\\用户名\\AppData\\Roaming\\Apple Computer\\MobileSync\\Backup，每个备份以UUID命名。"
    },
    {
      id: 455,
      question: "Android的/data分区存储用户应用数据，通常需要ROOT权限才能访问。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Android的/data/data/目录存储各应用的数据，受Linux权限保护，通常需要ROOT权限或ADB backup才能访问。未ROOT时无法直接浏览。"
    },
    {
      id: 456,
      question: "Chrome 80版本以后，密码使用AES-256-GCM加密存储。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Chrome 80版本以后，密码加密前缀为v10/v11，使用AES-256-GCM加密。80版本以前使用DPAPI（Windows数据保护API）加密。"
    },
    {
      id: 457,
      question: "Windows安全日志中，事件ID 4624表示成功登录。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "4624表示成功登录（An account was successfully logged on）。4625表示登录失败，4634表示注销，4647表示用户启动注销。"
    },
    {
      id: 458,
      question: "Windows安全日志中，事件ID 4625表示登录失败。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "4625表示登录失败（Failed logon attempt）。通过分析4625事件可以识别暴力破解攻击、密码猜测等入侵尝试。"
    },
    {
      id: 459,
      question: "Apache服务器的访问日志默认文件名为access.log。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Apache访问日志默认文件名为access.log（或access_log），错误日志为error.log。IIS日志默认在C:\\inetpub\\logs\\LogFiles。"
    },
    {
      id: 460,
      question: "JPEG图片文件的文件头签名是FF D8。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "JPEG文件以FF D8（SOI，Start Of Image）开头，FF D9（EOI，End Of Image）结尾。文件雕刻技术利用这些签名恢复已删除的JPEG文件。"
    },
    {
      id: 461,
      question: "PNG图片文件的文件头签名是89 50 4E 47。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "PNG文件以89 50 4E 47（对应.PNG）开头，后面是0D 0A 1A 0A（DOS换行+Unix换行+Ctrl-Z+Unix换行）。"
    },
    {
      id: 462,
      question: "PDF文件的文件头签名是%PDF。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "PDF文件以%PDF开头（十六进制25 50 44 46），后面通常跟着版本号（如%PDF-1.4）。文件雕刻工具利用此签名恢复PDF文件。"
    },
    {
      id: 463,
      question: "FAT32文件系统支持单个文件超过4GB。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "FAT32由于32位簇号的设计限制，单个文件最大只能支持约4GB（实际为4GB减1字节）。超过4GB的文件需要使用NTFS或exFAT文件系统。"
    },
    {
      id: 464,
      question: "exFAT文件系统支持单个文件超过4GB。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "exFAT（Extended FAT）支持单个文件最大16EB（exabytes），远超FAT32的4GB限制。适合用于大容量闪存设备（如SDXC卡）。"
    },
    {
      id: 465,
      question: "NTFS的$MFT记录大小通常为1024字节。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "NTFS文件系统中，每个$MFT（主文件表）记录固定为1024字节（1KB），包含文件的元数据属性（如文件名、时间戳、数据运行等）。"
    },
    {
      id: 466,
      question: "NTFS的$UsnJrnl记录了文件系统中所有文件的修改操作。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "$UsnJrnl（USN Journal，Update Sequence Number Journal）记录NTFS文件系统中所有文件的创建、修改、删除、重命名等操作，是时间线分析的重要数据源。"
    },
    {
      id: 467,
      question: "Slack空间是文件最后一个簇中未使用的部分，可能包含旧数据。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Slack空间（File Slack）是文件最后一个簇中，文件实际数据结束到簇结束之间的未使用空间。之前文件的数据可能残留在此，是重要的取证信息来源。"
    },
    {
      id: 468,
      question: "未分配空间是文件系统中未分配给任何文件或目录的簇。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "未分配空间（Unallocated Space）是文件系统中未分配给任何文件或目录的簇。已删除文件的数据可能残留在此，直到被新文件覆盖。数据恢复主要在此区域搜索。"
    },
    {
      id: 469,
      question: "数字签名可以验证电子数据的来源和完整性。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "数字签名基于公钥密码学，可以验证数据来源（身份认证）、数据完整性（篡改后签名失效）、防止抵赖（签名者无法否认）和确定签名时间。"
    },
    {
      id: 470,
      question: "CRC32可以作为电子数据取证的可靠完整性校验方法。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "CRC32是循环冗余校验，用于检测随机错误，不是加密哈希。CRC32可以被轻易构造碰撞，不能用于电子数据取证的完整性校验。应使用MD5/SHA-1/SHA-256。"
    },
    {
      id: 471,
      question: "云取证面临数据分布、多租户隔离、动态迁移和法律管辖权等挑战。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "云取证确实面临：分布式存储（跨国数据）、多租户环境隔离、弹性伸缩动态迁移、日志留存策略、法律管辖权、服务提供商配合、加密数据获取等多重挑战。"
    },
    {
      id: 472,
      question: "智能手表取证可以从设备本身、配对手机和云端同步数据中获取信息。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "智能手表取证数据源：设备本地存储（SQLite）、配对手机APP（健康数据、通知、位置）、云端同步数据（账户、历史记录）、蓝牙通信日志等。"
    },
    {
      id: 473,
      question: "车载系统（IVI）取证可以提取导航历史、蓝牙配对记录和USB连接记录。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "车载信息娱乐系统取证可提取：导航历史（目的地、路径）、蓝牙配对记录、通话记录、USB设备连接记录、媒体播放历史、系统日志等。"
    },
    {
      id: 474,
      question: "无人机取证可以提取飞行日志、GPS轨迹和拍摄的照片/视频。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "无人机取证可提取：飞行日志（飞行路径、高度、速度、时间）、GPS轨迹、拍摄的照片/视频、遥控器配对信息、固件版本、用户账户等。"
    },
    {
      id: 475,
      question: "社交工程攻击的证据通常包括钓鱼邮件、伪造网站和聊天记录。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "社交工程攻击证据：钓鱼邮件（头信息、发送服务器）、伪造网站（域名注册、服务器IP）、聊天记录（诱导话术）、通话录音（冒充身份）等。"
    },
    {
      id: 476,
      question: "在网络入侵取证中，WebShell是一种常见的恶意文件。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "WebShell（如PHP/ASPX/JSP文件）是攻击者上传的恶意脚本，用于远程控制服务器。通过文件签名、时间戳、Web日志等可以发现WebShell。"
    },
    {
      id: 477,
      question: "RDP（远程桌面）连接的痕迹包括Event Log 1149和4624（类型10）。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "RDP痕迹：Event Log 1149（远程桌面认证成功）、4624（登录类型10为RDP）、Terminal Services日志、RDP Bitmap Cache（缓存屏幕图像）、注册表MruXCID等。"
    },
    {
      id: 478,
      question: "Windows系统中，LastVisitedMRU记录了用户通过文件对话框最近访问的文件夹路径。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "LastVisitedMRU（Most Recently Used）注册表项记录了用户通过文件对话框（打开/保存）最近访问的文件夹路径，是用户行为分析的重要痕迹。"
    },
    {
      id: 479,
      question: "Linux系统中，last命令读取/var/log/wtmp显示用户登录历史。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "last命令读取/var/log/wtmp（二进制格式）显示用户登录历史。/var/log/btmp记录失败的登录尝试。syslog和messages是系统日志。"
    },
    {
      id: 480,
      question: "Windows系统中，WMI事件订阅可以被恶意软件用于隐蔽持久化。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "恶意软件可以创建WMI事件订阅（如每隔X分钟触发一次），在系统事件发生时执行恶意代码。WMI持久化隐蔽性强，传统工具难以检测。"
    },
    {
      id: 481,
      question: "Cuckoo Sandbox是一种开源的恶意软件动态分析沙箱。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Cuckoo Sandbox是开源的恶意软件自动分析系统，在隔离环境中运行可疑程序，监控文件操作、注册表修改、网络通信、API调用等行为。"
    },
    {
      id: 482,
      question: "YARA规则通过字符串、二进制模式和逻辑条件来识别恶意软件。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "YARA是一种恶意软件分类和检测工具，规则可以基于：字符串匹配、十六进制模式、正则表达式、文件大小、条件逻辑等。被广泛用于安全研究和取证。"
    },
    {
      id: 483,
      question: "PE文件中的节区表（Section Table）描述了代码、数据、资源等的分布。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "PE文件的节区表（IMAGE_SECTION_HEADER）描述了各节区（如.text代码、.data数据、.rsrc资源、.rdata只读数据）的名称、大小、偏移、权限等。"
    },
    {
      id: 484,
      question: "DGA生成的域名可以被静态黑名单完全覆盖。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "DGA每天可能生成数千个域名，其中只有极少数是真实C2域名。静态黑名单无法覆盖所有可能的DGA域名，需要动态检测（如NXDOMAIN频率分析）。"
    },
    {
      id: 485,
      question: "网络流量分析中，Wireshark可以使用'http'过滤器筛选HTTP流量。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Wireshark中'http'显示过滤器可以筛选HTTP协议流量。'tcp.port==80'也可以筛选80端口流量，但可能包含非HTTP流量（如WebSocket）。"
    },
    {
      id: 486,
      question: "DHCP协议的主要功能是动态分配IP地址。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "DHCP（Dynamic Host Configuration Protocol）自动为网络设备分配IP地址、子网掩码、网关、DNS等配置。取证中可以通过DHCP日志追踪设备接入历史。"
    },
    {
      id: 487,
      question: "NAT可以将私有IP地址转换为公网IP地址。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "NAT（Network Address Translation）将局域网内的私有IP地址（如192.168.x.x）转换为公网IP地址，实现多个设备共享一个公网IP访问互联网。"
    },
    {
      id: 488,
      question: "交换机根据MAC地址表转发数据帧。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "交换机工作在数据链路层，根据MAC地址表转发数据帧。路由器工作在网络层，根据IP地址和路由表转发数据包。"
    },
    {
      id: 489,
      question: "路由器根据IP地址和路由表转发数据包。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "路由器工作在网络层，根据路由表和IP地址进行数据包转发。交换机根据MAC地址转发。两者在取证中都可以通过配置和日志提取关键信息。"
    },
    {
      id: 490,
      question: "MACE时间戳包括修改时间、访问时间、创建时间和MFT记录修改时间。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "MACE时间戳：M（Modification，修改时间）、A（Access，访问时间）、C（Creation，创建时间）、E（MFT Entry modified time，MFT记录修改时间）。"
    },
    {
      id: 491,
      question: "Windows系统中，Event Log事件日志以.evtx格式存储。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Windows Vista及以后版本，事件日志以.evtx格式存储在C:\\Windows\\System32\\winevt\\Logs。旧版本（XP）使用.evt格式。"
    },
    {
      id: 492,
      question: "Linux系统中，systemd-journald是现代系统的日志管理服务。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "systemd-journald是systemd组件，用于收集和存储日志，在现代Linux系统（CentOS 7+、Ubuntu 15+等）中取代了传统的syslog/rsyslog。"
    },
    {
      id: 493,
      question: "IIS服务器访问日志默认存储在C:\\inetpub\\logs\\LogFiles。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "IIS访问日志默认存储在C:\\inetpub\\logs\\LogFiles目录下，按站点和日期组织。Apache日志通常在安装目录的logs文件夹中。"
    },
    {
      id: 494,
      question: "VoIP通话可以通过分析SIP协议和RTP协议进行取证。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "VoIP取证：SIP协议（Session Initiation Protocol）分析呼叫建立/拆除/信令，RTP协议（Real-time Transport Protocol）分析媒体流（语音数据）。可以提取通话双方、时间、时长等。"
    },
    {
      id: 495,
      question: "电子邮件中的Message-ID是每封邮件的唯一标识符。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Message-ID是每封邮件的全局唯一标识符（UUID格式），在邮件头中。通过Message-ID可以追踪邮件在网络中的传输路径，区分不同邮件。"
    },
    {
      id: 496,
      question: "Outlook的PST文件可以存储邮件、联系人、日历和任务。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "PST（Personal Storage Table）是Outlook的本地存储文件，可以存储邮件、联系人、日历、任务、笔记等。新版Outlook使用OST（Offline Storage Table）格式。"
    },
    {
      id: 497,
      question: "Thunderbird邮件客户端使用MBOX格式存储邮件。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Thunderbird使用MBOX格式（将多封邮件存储在一个文件中，以'From '分隔）或Maildir格式。Apple Mail使用EMLX格式（每封邮件一个文件）。"
    },
    {
      id: 498,
      question: "电子数据鉴定报告应当由鉴定人签名并加盖鉴定机构公章。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "根据《司法鉴定程序通则》，鉴定意见书应当由鉴定人签名，加盖司法鉴定机构的司法鉴定专用章。多人参与的，应当共同签名。"
    },
    {
      id: 499,
      question: "电子物证实验室应具备只读设备、写保护环境和防静电措施。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "电子物证实验室必备条件：只读设备/写保护、防静电措施（手环/地垫）、监控录像、访问控制、恒温恒湿、专业取证软件、网络安全隔离等。"
    },
    {
      id: 500,
      question: "在电子数据取证中，制作两份镜像（工作镜像+封存镜像）是最佳实践。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "制作双镜像：一份作为封存镜像（不打开，用于法庭出示），一份作为工作镜像（用于分析）。两者哈希值应一致，确保工作镜像的可靠性。"
    },
    {
      id: 501,
      question: "证据保管链是确保证据从收集到呈堂全过程中未被篡改的记录制度。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "证据保管链（Chain of Custody）详细记录证据的流转过程：谁接触、何时、何地、为何、如何操作。是确保证据合法性和可采性的关键制度。"
    },
    {
      id: 502,
      question: "在电子数据取证中，哈希值相同的两个文件内容一定相同。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "哈希函数具有雪崩效应和抗碰撞性，不同文件内容产生相同哈希值的概率极低（几乎不可能）。在电子取证中，哈希值一致可以确信文件内容相同。"
    },
    {
      id: 503,
      question: "电子数据取证必须遵循法律程序，否则证据可能被排除。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "非法取证（如无权搜查、程序违法、侵犯隐私）可能导致证据被排除（非法证据排除规则）。取证必须依法进行，遵循《刑事诉讼法》《电子数据规定》等规定。"
    },
    {
      id: 504,
      question: "对于加密数据，如果没有密码或密钥，取证人员可以直接暴力破解。",
      options: ["正确", "错误"],
      answer: "B",
      explanation: "暴力破解加密数据在技术上可能不可行（强密码+现代加密算法），且可能违反法律（如破坏证据完整性）。应优先尝试合法途径获取密码，或从内存中提取密钥。"
    },
    {
      id: 505,
      question: "内存取证中，Volatility的pslist插件可以列出内存中的所有进程。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Volatility的pslist插件通过遍历EPROCESS链表列出内存镜像中的所有进程。psxview可以交叉验证隐藏进程，psscan扫描物理内存发现未链表进程。"
    },
    {
      id: 506,
      question: "Volatility的netscan插件可以查看内存中的网络连接。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "netscan插件列出内存中的TCP和UDP连接，包括本地/远程IP、端口、状态、拥有进程等。是发现C2通信、数据传输的重要工具。"
    },
    {
      id: 507,
      question: "Volatility的hivelist插件可以查看内存中的注册表蜂巢。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "hivelist列出内存中的注册表蜂巢（SAM、SYSTEM、SOFTWARE、NTUSER.DAT等），hivedump可以提取特定蜂巢的注册表数据。"
    },
    {
      id: 508,
      question: "Windows系统中，cmdscan插件可以提取命令提示符的历史命令。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "cmdscan从内存中提取命令提示符（cmd.exe）的命令历史。consoles提取控制台的输入输出，cmdline提取进程的命令行参数。"
    },
    {
      id: 509,
      question: "Windows系统中，注册表SAM文件存储了用户账户的密码哈希。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "SAM（Security Accounts Manager）存储Windows用户账户的NTLM密码哈希。需要SYSTEM文件的Boot Key才能解密SAM数据库。"
    },
    {
      id: 510,
      question: "Windows系统中，注册表SYSTEM文件包含用于解密SAM的Boot Key。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "SYSTEM文件存储了SAM数据库的加密密钥（Boot Key）。取证工具（如Mimikatz、pwdump）需要SYSTEM和SAM文件才能提取用户密码哈希。"
    },
    {
      id: 511,
      question: "Windows系统中，LSASS进程内存可能包含用户的明文密码。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "LSASS（Local Security Authority Subsystem Service）进程管理用户登录凭证，内存中可能存储明文密码或哈希。Mimikatz等工具可以从LSASS内存中提取凭证。"
    },
    {
      id: 512,
      question: "在取证中，可以从LSASS内存转储中提取登录凭证。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "LSASS内存中包含用户登录凭证（明文密码、NTLM哈希、Kerberos票据等）。通过内存转储（如procdump -ma lsass.exe）和分析工具（Mimikatz）可以提取。"
    },
    {
      id: 513,
      question: "Windows系统中，Sysmon可以记录详细的系统活动日志（进程创建、网络连接、文件修改等）。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Sysmon（System Monitor）是Sysinternals工具，通过Windows事件日志记录：进程创建（含命令行、哈希）、网络连接、文件创建时间修改、注册表操作、DLL加载等，是高级威胁检测的重要工具。"
    },
    {
      id: 514,
      question: "Windows系统中，ETW（Event Tracing for Windows）是内核级的事件跟踪机制。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "ETW是Windows内核提供的高性能事件跟踪机制，允许应用程序和驱动程序记录事件。Sysmon、PowerShell日志、.NET日志等都基于ETW。"
    },
    {
      id: 515,
      question: "PowerShell脚本执行的历史记录可以通过事件日志分析。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "Windows 8+启用PowerShell脚本块日志（Event ID 4104）和模块日志（Event ID 4103），记录执行的PowerShell脚本内容和命令。是攻击者使用PowerShell的重要取证来源。"
    },
    {
      id: 516,
      question: "在电子数据取证中，时间同步（NTP）是确保时间戳准确的重要措施。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "取证前应对取证计算机进行时间校准（NTP同步），确保记录的时间戳准确。时间不一致可能导致证据时间线混乱，影响案件分析。"
    },
    {
      id: 517,
      question: "在远程服务器取证中，ping和tracert命令可以帮助确定网络路径。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "ping测试目标主机连通性，tracert（traceroute）追踪数据包从源到目的地的路由路径，显示经过的每一跳路由器IP。是网络取证的基础工具。"
    },
    {
      id: 518,
      question: "在电子数据取证中，拍照固定证据时应当包含时间和设备信息。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "拍照固定证据时，应当确保照片包含：拍摄时间（设备时间校准）、设备信息、证据全貌、细节特征、比例尺等。照片本身也应作为证据记录。"
    },
    {
      id: 519,
      question: "电子数据取证报告的鉴定意见应当客观、明确、可重现。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "鉴定意见应当客观陈述发现的事实，避免主观臆断；意见明确（而非模棱两可）；鉴定过程应当可重现（其他鉴定人按照相同方法应得到相同结果）。"
    },
    {
      id: 520,
      question: "电子数据取证人员应当持续学习和更新知识，跟进新技术和新标准。",
      options: ["正确", "错误"],
      answer: "A",
      explanation: "电子数据技术发展迅速（新操作系统、新应用、新设备、新加密技术），取证人员必须持续学习更新知识，参加培训，跟进最新技术、标准和法律法规，保持专业能力。"
    }  ]
};
